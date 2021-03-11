import {
  ACTION_MARGIN_BOTTOM,
  ACTION_MARGIN_LEFT,
  ACTION_MARGIN_RIGHT,
  ACTION_MARGIN_TOP,
  ACTION_PADDING_BOTTOM,
  ACTION_PADDING_LEFT,
  ACTION_PADDING_RIGHT,
  ACTION_PADDING_TOP,
  CASE_HEADER_HEIGHT,
  CASE_HEADER_LABEL_SIZE,
  CASE_MARGIN_BOTTOM,
  CASE_PADDING_BOTTOM,
  CASE_PADDING_TOP,
  CONNECTION_ARROW_SIZE,
  CONNECTION_ROW_SIZE,
  CONNECTION_STROKE_SIZE,
  DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT,
  DATASOURCE_AND_DATAPURPOSE_MARGIN_BOTTOM,
  DATASOURCE_AND_DATAPURPOSE_MARGIN_TOP,
  DATASOURCE_AND_DATAPURPOSE_PADDING_BOTTOM,
  DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT,
  DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT,
  DATASOURCE_AND_DATAPURPOSE_PADDING_TOP,
  DATASOURCE_AND_DATAPURPOSE_WIDTH,
  HEADER_OFFSET,
  MIN_GAP_HEIGHT,
  PARTICIPANTS_SIZE,
  SHORTINFO_MARGIN_BOTTOM, TEXT_SPACING
} from "../Constants";
import { getAbsoluteValue } from "./LayoutCalc";
import { Participant } from "../../entities/Participant";
import { Connection } from "../../entities/Connection";
import { ConnectionType } from "../../entities/ConnectionType";
import { BoxType } from "../../entities/BoxType";
import { ProcessedDataSource } from "../../entities/ProcessedDataSource";
import { ProcessedAction } from "../../entities/ProcessedAction";
import { ProcessedDataPurpose } from "../../entities/ProcessedDataPurpose";
import { RowHeight } from "../../entities/RowHeight";
import { ConnectionGapHeight } from "../../entities/ConnectionGapHeight";
import { ProcessedConnection } from "../../entities/ProcessedConnection";
import { ProcessedParticipant } from "../../entities/ProcessedParticipant";
import { ProcessedCase } from "../../entities/ProcessedCase";
import { Action } from "../../entities/Action";
import { DataSource } from "../../entities/DataSource";
import { DataPurpose } from "../../entities/DataPurpose";
import { Case } from "../../entities/Case";

export const getIdByItem = (item: ProcessedCase | ProcessedDataSource | ProcessedDataPurpose | ProcessedAction | ProcessedConnection) => {
  if( "id" in item) {
    return item.id;
  }
  if( "dataSource" in item ) {
    return item.dataSource.id;
  }
  if( "dataPurpose" in item ) {
    return item.dataPurpose.id
  }
  if( "action" in item ) {
    return item.action.id;
  }
  if( "connection" in item ) {
    return item.connection.id;
  }
};

export const getItemByCaseAndId = ( processedCase: ProcessedCase, itemId: string ) => {
  if( processedCase ) {
    return [
      processedCase.dataSources.find( ( dS: ProcessedDataSource ) => {
        return dS.dataSource.id === itemId;
      } ),
      processedCase.dataPurposes.find( ( dP: ProcessedDataPurpose ) => {
        return dP.dataPurpose.id === itemId;
      } ),
      processedCase.actions.find( ( a: ProcessedAction ) => {
        return a.action.id === itemId;
      } ),
      processedCase.connections.find( ( a: ProcessedConnection ) => {
        return a.connection.id === itemId;
      } )
    ].filter( ( item: any ) => item !== undefined )[0];
  }
};

export const processParticipants = ( participants: Participant[], canvasWidth: number, canvasHeight: number ) => {

  return participants.map( ( p: Participant, index: number ) => {
    const margin = getAbsoluteValue( canvasWidth, (PARTICIPANTS_SIZE / participants.length) ) * 0.125;
    const pWidth = getAbsoluteValue( canvasWidth, (PARTICIPANTS_SIZE / participants.length) ) - margin*2;
    const pX = getAbsoluteValue( canvasWidth, 25 + (PARTICIPANTS_SIZE / participants.length) * index) + margin;

    return {
      participant: p,
      x: pX,
      y: 0,
      width: pWidth,
      height: canvasHeight
    }
  } );
};

export const getStringArrayByWidth = ( str: string, width: number, textSize: number ) => {
  let list: string[] = [];
  const words = str.split( " " );
  let temp = "";
  let maxSigns =  Math.floor(width / (textSize)) * 2;

  words.forEach( ( item, index ) => {
    let innerTemp = temp;
    temp += item;

    if(temp.length > maxSigns) {
      list.push(innerTemp.slice(0, -1));
      temp = item + " ";
    } else {
      temp += " ";
    }
    if(words.length === (index + 1) ) {
      list.push(temp.slice(0, -1));
    }
  } );
  return list;
};

const getConnectionItemByProcessed = ( itemId: string, processedActions: ProcessedAction[],
  processedDataSources: ProcessedDataSource[], processedDataPurposes: ProcessedDataPurpose[] ) => {
  const connectionItemByActions = processedActions.find( item => item.action.id === itemId )!;
  const connectionItemByDataSources = processedDataSources.find( item => item.dataSource.id === itemId )!;
  const connectionItemByDataPurposes = processedDataPurposes.find( item => item.dataPurpose.id === itemId )!;

  return connectionItemByActions ? connectionItemByActions
    : connectionItemByDataSources ? connectionItemByDataSources : connectionItemByDataPurposes;

};

export const processConnections = ( connections: Connection[], connectionTypes: ConnectionType[],
  processedActions: ProcessedAction[],
  processedDataSources: ProcessedDataSource[], processedDataPurposes: ProcessedDataPurpose[], rowHeights: RowHeight[],
  connectionGapHeights: ConnectionGapHeight[], caseY: number, canvasWidth: number,
  caseHeaderHeight: number, showDetailedModel: boolean, isLowMode: boolean ): ProcessedConnection[] => {

  return connections.map( (con: Connection) => {

    const connectionType = connectionTypes.find( ct => ct.id === con.typeId );
    if( !connectionType ) {
      throw new Error( "Unknown connection type: " + con.typeId );
    }

    const conSource = getConnectionItemByProcessed( con.source, processedActions, processedDataSources,
      processedDataPurposes );
    const conDestination = getConnectionItemByProcessed( con.destination, processedActions, processedDataSources,
      processedDataPurposes );

    const conRowHeightsAboveStart = rowHeights.filter( item => item.pos <= con.position.start ).map( item => item.value );
    const conRowHeightsAboveStartValue = conRowHeightsAboveStart.reduce( ( acc, current ) => acc + current, 0 );
    const conPositionStartRowHeight = rowHeights.find( item => item.pos === con.position.start )!;

    const connectionGapHeightsAboveStart = connectionGapHeights.filter( item => item.pos < con.position.start )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );
    const conPosStartY = caseY
      + getAbsoluteValue( canvasWidth, CASE_PADDING_TOP )
      + caseHeaderHeight
      + conRowHeightsAboveStartValue
      + connectionGapHeightsAboveStart
      - (conPositionStartRowHeight ? conPositionStartRowHeight.value / 2 : 0);

    const conRowHeightsAboveEnd = rowHeights.filter( item => item.pos <= con.position.end ).map( item => item.value );
    const conRowHeightsAboveEndValue = conRowHeightsAboveEnd.reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsAboveEnd = connectionGapHeights.filter( item => item.pos < con.position.end )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );
    const conPosEndY = caseY
      + getAbsoluteValue( canvasWidth, CASE_PADDING_TOP )
      + caseHeaderHeight
      + conRowHeightsAboveEndValue
      + connectionGapHeightsAboveEnd
      - (conPositionStartRowHeight ? conPositionStartRowHeight.value / 2 : 0);

    const strokeVariance = isLowMode
      ? 0
      : getAbsoluteValue( canvasWidth, CONNECTION_STROKE_SIZE ) / (5 * CONNECTION_STROKE_SIZE);

    const dataSourceAndActionGap = getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT )
      + getAbsoluteValue( canvasWidth, ACTION_MARGIN_LEFT );



    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;
    let height = getAbsoluteValue( canvasWidth, 7 );
    let textX = 0;
    let textY = 0;
    let textWidth = 0;
    let textHeight = 0;
    let textAnchor = "middle";
    let arrowSize = getAbsoluteValue( canvasWidth, CONNECTION_ARROW_SIZE );

    let labelRows = 0;
    let arrowTranslate = "";
    let arrowD = "";
    let labelRowSize = getAbsoluteValue( canvasWidth, connectionType.labelSize );
    let startX = 0;
    let startY = conPosStartY;

    if( con.position.start === con.position.end ) {

      y1 = conPosStartY - strokeVariance;
      y2 = conPosStartY + strokeVariance;

      if( conSource.x < conDestination.x ) {
        x1 = conSource.x + conSource.width;
        x2 = conDestination.x - arrowSize;

        arrowTranslate = "translate(" + x2 + ", " + (conPosStartY - arrowSize / 2) + ")";
        arrowD = "M0 0 L0 " + arrowSize + " L" + arrowSize + " " + arrowSize / 2 + " Z";
        if( !showDetailedModel ) {
          arrowTranslate = "translate(" + (x1 + (x2 - x1) / 2) + "," + (y1 - height * 0.8 / 2) + ") scale(1, 0.8)";
          arrowD = "M0 0 L" + height * 0.25 + " 0 L" + height / 2 + " " + height / 2 + " L" + height * 0.25 + " "
            + height + " L0 " + height + " L" + (height / 2 - height * 0.25) + " " + height / 2 + "Z";
        }

        textX = x1;
        textWidth = x2 - x1 + arrowSize;
        labelRows =
          [con.label].map( ( label: string ) => {
            return getStringArrayByWidth( label, textWidth, labelRowSize ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 );

      }
      else {
        x1 = conDestination.x + conDestination.width + arrowSize;
        x2 = conSource.x;

        arrowTranslate = "translate(" + x1 + ", " + (conPosStartY - arrowSize / 2) + ")";
        arrowD = "M0 0 L0 " + arrowSize + " L-" + arrowSize + " " + arrowSize / 2 + " Z";
        if( !showDetailedModel ) {
          arrowTranslate = "translate(" + (x1 + (x2 - x1) / 2) + "," + (y1 - height * 0.8 / 2) + ") scale(-1, 0.8)";
          arrowD = "M0 0 L" + height * 0.25 + " 0 L" + height / 2 + " " + height / 2 + " L" + height * 0.25 + " "
            + height + " L0 " + height + " L" + (height / 2 - height * 0.25) + " " + height / 2 + "Z";

        }
        textX = x1 - arrowSize/2;
        textWidth = x2 - x1 + arrowSize;
        labelRows =
          [con.label].map( ( label: string ) => {
            return getStringArrayByWidth( label, textWidth, labelRowSize ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 );

      }

      textHeight = (labelRows + 2) * labelRowSize;
      textY = conPosStartY - textHeight;
    }
    else {
      if( conSource.x === conDestination.x ) {
        x1 = conSource.x + strokeVariance + conSource.width / 2;
        x2 = conSource.x - strokeVariance + conSource.width / 2;

        textX = conSource.x;
        textWidth = conSource.width/2;

        labelRows =
          [con.label].map( ( label: string ) => {
            return getStringArrayByWidth( label, textWidth, labelRowSize ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 );
        if( conSource.y < conDestination.y ) {
          y1 = conSource.y + conSource.height;
          y2 = conDestination.y - arrowSize;

          arrowTranslate = "translate(" + (x1 - arrowSize / 2 - strokeVariance) + ", " + y2 + ")";
          arrowD = "M0 0 L" + arrowSize + " 0 L" + arrowSize / 2 + " " + arrowSize + " Z";
          if( !showDetailedModel ) {
            arrowTranslate = "translate(" + (x1 + (x2 - x1) / 2) + "," + (y1 - height * 0.8 / 2) + ") scale(1, 0.8)";
            arrowD = "M0 0 L" + height * 0.25 + " 0 L" + height / 2 + " " + height / 2 + " L" + height * 0.25 + " "
              + height + " L0 " + height + " L" + (height / 2 - height * 0.25) + " " + height / 2 + "Z";
          }

          textHeight = con.textEllipsis ? 0 : (labelRows + 2) * labelRowSize;
          textY = y1 + (y2 - y1 + arrowSize - textHeight)/2;
        }
        else {
          y1 = conDestination.y + conDestination.height + arrowSize;
          y2 = conSource.y;

          arrowTranslate = "translate(" + (x1 - arrowSize / 2 - strokeVariance) + ", " + (y1 - arrowSize) + ")";
          arrowD = "M0 " + arrowSize + " L" + arrowSize / 2 + "  0 L" + arrowSize + " " + arrowSize + " Z";
          if( !showDetailedModel ) {
            arrowTranslate = "translate(" + (x1 + (x2 - x1) / 2) + "," + (y1 - height * 0.8 / 2) + ") scale(-1,0.8)";
            arrowD = "M0 0 L" + height * 0.25 + " 0 L" + height / 2 + " " + height / 2 + " L" + height * 0.25 + " "
              + height + " L0 " + height + " L" + (height / 2 - height * 0.25) + " " + height / 2 + "Z";
          }

          textHeight = con.textEllipsis ? 0 : (labelRows + 2) * labelRowSize;
          textY = y1 + (y2 - y1 - arrowSize - textHeight)/2;
        }
      }
      else {
        if( conSource.x < conDestination.x ) {
          x1 = conSource.x + conSource.width + dataSourceAndActionGap / 2;
          x2 = conDestination.x - arrowSize;

          y1 = conPosEndY - strokeVariance;
          y2 = conPosEndY + strokeVariance;

          textX = x1;
          textWidth = x2 - x1;
          labelRows =
            [con.label].map( ( label: string ) => {
              return getStringArrayByWidth( label, textWidth, labelRowSize ).length;
            } ).reduce( ( sum, current ) => sum + current, 0 );
          textHeight = con.textEllipsis ? 0 : (labelRows + 2) * labelRowSize;
          textY = conPosEndY - textHeight;


          arrowTranslate = "translate(" + (x2) + ", " + (y2 - arrowSize / 2 - strokeVariance) + ")";
          arrowD = "M0 0 L0 " + arrowSize + " L" + arrowSize + " " + arrowSize / 2 + " Z";

          startX = conSource.x + conSource.width;
        }
        else {
          x1 = conSource.x - dataSourceAndActionGap / 2;
          x2 = conDestination.x + conDestination.width + arrowSize;

          y1 = conPosEndY - strokeVariance;
          y2 = conPosEndY + strokeVariance;

          textX = x2;
          textWidth = x1 - x2;
          labelRows =
            [con.label].map( ( label: string ) => {
              return getStringArrayByWidth( label, textWidth, labelRowSize ).length;
            } ).reduce( ( sum, current ) => sum + current, 0 );
          textHeight = con.textEllipsis ? 0 : (labelRows + 2) * labelRowSize;
          textY = conPosEndY - textHeight;

          arrowTranslate = "translate(" + (x2) + ", " + (y2 - arrowSize / 2 - strokeVariance) + ")";
          arrowD = "M0 0 L0 " + arrowSize + " L-" + arrowSize + " " + arrowSize / 2 + " Z";

          startX = conSource.x;
        }

      }
    }


    return {
      connection: con,
      connectionType: connectionType,
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2,
      textX: textX,
      textY: textY,
      textWidth: textWidth,
      textHeight: textHeight,
      arrowTranslate: arrowTranslate,
      arrowD: arrowD,
      textAnchor: textAnchor,
      startX: startX,
      startY: startY
    }
  } );

};

export const processActions = ( actions: Action[],
  processedParticipants: ProcessedParticipant[], rowHeights: RowHeight[], connectionGapHeights: ConnectionGapHeight[],
  caseY: number, canvasWidth: number, caseHeaderHeight: number, showDetailedModel: boolean ): ProcessedAction[] => {

  return actions.map( ( a, index ) => {


    const actionsRowHeightsAbove = rowHeights.filter( item => item.pos < a.position.start ).map( item => item.value )
      .reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsAbove = connectionGapHeights.filter( item => item.pos < a.position.start )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsInner = connectionGapHeights.filter(
      item => item.pos >= a.position.start && item.pos < a.position.end )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    let x = canvasWidth * 0.3;
    let width = getAbsoluteValue( canvasWidth, (PARTICIPANTS_SIZE - 10) );
    if( showDetailedModel ) {
      const aParticipant = processedParticipants.find( p => p.participant.id === a.participantID )!;

      x = (aParticipant && aParticipant.x) + getAbsoluteValue( canvasWidth, ACTION_MARGIN_LEFT );
      width = (aParticipant && aParticipant.width) - getAbsoluteValue( canvasWidth, ACTION_MARGIN_LEFT )
        - getAbsoluteValue( canvasWidth,
          ACTION_MARGIN_RIGHT );
    }

    const y = caseY
      + getAbsoluteValue( canvasWidth, CASE_PADDING_TOP )
      + caseHeaderHeight
      + actionsRowHeightsAbove
      + connectionGapHeightsAbove;

    const height = rowHeights.filter( item => (item.pos >= a.position.start && item.pos <= a.position.end) )
        .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 )
      + connectionGapHeightsInner;

    return { action: a, x: x, y: y, width: width, height: height };
  } );
};

export const processDataSources = ( dataSources: DataSource[], rowHeights: RowHeight[],
  connectionGapHeights: ConnectionGapHeight[],
  caseY: number, canvasWidth: number, caseHeaderHeight: number ): ProcessedDataSource[] => {

  return dataSources.map( ds => {
    const dataSourcesRowHeightsAbove = rowHeights.filter( item => item.pos < ds.position.start )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsAbove = connectionGapHeights.filter( item => item.pos < ds.position.start )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsInner = connectionGapHeights.filter(
      item => item.pos >= ds.position.start && item.pos < ds.position.end )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const x = getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT );
    const y = caseY + getAbsoluteValue( canvasWidth, CASE_PADDING_TOP ) + caseHeaderHeight
      + dataSourcesRowHeightsAbove
      + connectionGapHeightsAbove;

    const width = getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH );

    let height = rowHeights.filter( item => (item.pos >= ds.position.start && item.pos <= ds.position.end) )
        .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 )
      + connectionGapHeightsInner;

    return {
      dataSource: ds,
      x: x,
      y: y,
      width: width,
      height: height
    };
  } );
};

export const processDataPurposes = ( dataPurposes: DataPurpose[], rowHeights: RowHeight[],
  connectionGapHeights: ConnectionGapHeight[],
  caseY: number, canvasWidth: number, caseHeaderHeight: number ): ProcessedDataPurpose[] => {

  return dataPurposes.map( dp => {
    const dataSourcesRowHeightsAbove = rowHeights.filter( item => item.pos < dp.position.start )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsAbove = connectionGapHeights.filter( item => item.pos < dp.position.start )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const connectionGapHeightsInner = connectionGapHeights.filter(
      item => item.pos >= dp.position.start && item.pos < dp.position.end )
      .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 );

    const x = getAbsoluteValue( canvasWidth,
      (100 - DATASOURCE_AND_DATAPURPOSE_WIDTH - DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT) );

    const y = caseY + getAbsoluteValue( canvasWidth, CASE_PADDING_TOP ) + caseHeaderHeight
      + dataSourcesRowHeightsAbove
      + connectionGapHeightsAbove;

    const width = getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH );

    let height = rowHeights.filter( item => (item.pos >= dp.position.start && item.pos <= dp.position.end) )
        .map( item => item.value ).reduce( ( acc, current ) => acc + current, 0 )
      + connectionGapHeightsInner;

    return {
      dataPurpose: dp,
      x: x,
      y: y,
      width: width,
      height: height
    };
  } );
};

export const calcRowHeights = ( showDetailMode: boolean, c: Case, processedParticipants: ProcessedParticipant[],
  canvasWidth: number, boxTypes: BoxType[] ): RowHeight[] => {

  // HEIGHT FOR ACTIONS
  let actionList: RowHeight[] = [];
  const maxPos = Math.max.apply( Math, c.actions.map( ( a: Action ) => {
    return a.position.end;
  } ) );

  actionList = Array.from( { length: maxPos + 1 }, ( v, i ): RowHeight[] => {
    const affectedActions = c.actions.filter( item => i >= item.position.start && i <= item.position.end );

    if( affectedActions.length > 0 ) {
      return affectedActions.map( ( a: Action ) => {
        let width = getAbsoluteValue( canvasWidth, PARTICIPANTS_SIZE);

        const aBoxType = boxTypes.find( b => b.id === a.typeId )!;

        if(processedParticipants.length > 0) {
          const aParticipant = processedParticipants.find( p => p.participant.id === a.participantID )!;
          width = (aParticipant
            ? aParticipant.width
            : getAbsoluteValue( canvasWidth, PARTICIPANTS_SIZE ) - getAbsoluteValue( canvasWidth, (PARTICIPANTS_SIZE / processedParticipants.length) ) * 0.125)
            - getAbsoluteValue( canvasWidth, ACTION_MARGIN_LEFT )
            - getAbsoluteValue( canvasWidth, ACTION_MARGIN_RIGHT )
            - getAbsoluteValue( canvasWidth, ACTION_PADDING_LEFT )
            - getAbsoluteValue( canvasWidth, ACTION_PADDING_RIGHT );
        }

        const aCellCount = a.position.end - a.position.start;

        const labelRows = a.label.map( ( label: string ) => {
            return getStringArrayByWidth( label, width, getAbsoluteValue( canvasWidth, (aBoxType.labelSize + 0.1) ) ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 )
          + a.label.length - 1; // ABSÄTZE

        if( aCellCount <= 0 ) {
          const cellHeight = labelRows * getAbsoluteValue( canvasWidth, (aBoxType.labelSize + 0.1) )
            + getAbsoluteValue( canvasWidth, ACTION_PADDING_TOP )
            + getAbsoluteValue( canvasWidth, ACTION_PADDING_BOTTOM )
            + getAbsoluteValue( canvasWidth, ACTION_MARGIN_TOP )
            + getAbsoluteValue( canvasWidth, ACTION_MARGIN_BOTTOM );
          return { pos: i, value: cellHeight };
        }
        else {
          const cellHeight = (labelRows * getAbsoluteValue( canvasWidth, (aBoxType.labelSize + 0.1) )) / aCellCount
            + getAbsoluteValue( canvasWidth, ACTION_PADDING_TOP ) + getAbsoluteValue( canvasWidth,
              ACTION_PADDING_BOTTOM )
            + getAbsoluteValue( canvasWidth, ACTION_MARGIN_TOP ) + getAbsoluteValue( canvasWidth,
              ACTION_MARGIN_BOTTOM );
          return { pos: i, value: cellHeight };
        }

      } );
    }
    else {
      return [{ pos: i, value: 0 }];
    }

  } ).map( item => item!.reduce( ( prev, current ) => {
    return (prev!.value > current!.value) ? prev : current;
  } ) );

  // HEIGHT FOR DATASOURCES / DATAPURPOSES
  const dataSourcesMaxPos = Math.max.apply( Math, c.dataSources.map( ( ds: DataSource ) => {
    return ds.position.end;
  } ) );

  const dataSourcesList = Array.from( { length: dataSourcesMaxPos + 1 }, ( v, i ): RowHeight[] => {

    const affectedDataSources = c.dataSources.filter( item => i >= item.position.start && i <= item.position.end );

    if( affectedDataSources.length > 0 ) {
      return affectedDataSources.map( ( ds: DataSource ) => {

        const dsBoxType = boxTypes.find( b => b.id === ds.typeId )!;

        const textWidth = getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH )
          - getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT )
          - getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT );

        const dsCellCount = ds.position.end - ds.position.start;

        const labelRows = ds.label.map( ( label: string ) => {
            return getStringArrayByWidth( label, textWidth,
              getAbsoluteValue( canvasWidth, (dsBoxType.labelSize + 0.1) ) ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 )
          + ds.label.length - 1 + 2;

        if( dsCellCount <= 0 ) {
          const cellHeight = labelRows * getAbsoluteValue( canvasWidth, (dsBoxType.labelSize + 0.1) )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_BOTTOM )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_BOTTOM );
          return { pos: i, value: cellHeight };
        }
        else {
          const cellHeight = (labelRows * getAbsoluteValue( canvasWidth, (dsBoxType.labelSize + 0.1) ))
            / dsCellCount
            + getAbsoluteValue( canvasWidth, (dsBoxType.labelSize + 0.1) )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_BOTTOM )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_BOTTOM );
          return { pos: i, value: cellHeight };
        }

      } );
    }
    else {
      return [{ pos: i, value: 0 }];
    }

  } ).map( item => {
    return item!.reduce( ( prev, current ) => {
      return (prev!.value > current!.value) ? prev : current;
    } )
  } );

  // HEIGHT FOR  DATAPURPOSES
  const dataPurposesMaxPos = Math.max.apply( Math, c.dataPurposes.map( ( dp: DataPurpose ) => {
    return dp.position.end;
  } ) );

  const dataPurposesList = Array.from( { length: dataPurposesMaxPos + 1 }, ( v, i ): RowHeight[] => {
    const affectedDataPurposes = c.dataPurposes.filter( item => i >= item.position.start && i <= item.position.end );

    if( affectedDataPurposes.length > 0 ) {
      return affectedDataPurposes.map( ( dp: DataPurpose ) => {

        const dpBoxType = boxTypes.find( b => b.id === dp.typeId )!;


        const textWidth = getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_WIDTH )
          - getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT )
          - getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT );

        const dpCellCount = dp.position.end - dp.position.start;

        const labelRows = dp.label.map( ( label: string ) => {
            return getStringArrayByWidth( label, textWidth,
              getAbsoluteValue( canvasWidth, (dpBoxType.labelSize + 0.1) ) ).length;
          } ).reduce( ( sum, current ) => sum + current, 0 )
          + dp.label.length - 1 + 2;

        if( dpCellCount <= 0 ) {
          const cellHeight = labelRows * getAbsoluteValue( canvasWidth, (dpBoxType.labelSize + 0.1) )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_BOTTOM )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_BOTTOM );
          return { pos: i, value: cellHeight };
        }
        else {
          const cellHeight = (labelRows * getAbsoluteValue( canvasWidth, (dpBoxType.labelSize + 0.1) ))
            / dpCellCount
            + getAbsoluteValue( canvasWidth, (dpBoxType.labelSize + 0.1) )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_PADDING_BOTTOM )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_TOP )
            + getAbsoluteValue( canvasWidth, DATASOURCE_AND_DATAPURPOSE_MARGIN_BOTTOM );
          return { pos: i, value: cellHeight };
        }

      } );
    }
    else {
      return [{ pos: i, value: 0 }];
    }

  } ).map( item => item!.reduce( ( prev, current ) => {
    return (prev!.value > current!.value) ? prev : current;
  } ) );

  const combinedList: RowHeight[] = [...actionList, ...dataSourcesList, ...dataPurposesList];
  const result: RowHeight[] = [];
  new Set( combinedList.map( item => item.pos ) ).forEach( pos => {
    result.push( {
      pos: pos,
      value: Math.max.apply( Math, combinedList.filter( item => item.pos === pos ).map( item => item.value ) )
    } )
  } );

  return result;
};

const calcConnectionGapHeights = ( showDetailedMode: boolean, rowCount: number, connections: Connection[],
  actions: Action[], dataSources: DataSource[], dataPurposes: DataPurpose[],
  processedParticipants: ProcessedParticipant[], canvasWidth: number ): ConnectionGapHeight[] => {

  return Array.from( { length: rowCount }, ( item, i ) => {

    const affectedConnections = connections.filter( con => con.position.start <= i && con.position.end >= i );

    const connectionTextGapHeights: number[] = affectedConnections.map( ( con: Connection ) => {

      actions.filter( item => item.id === con.source || item.id === con.destination );

      if( con.position.start === con.position.end ) { // horizontal
        return 0;
      }
      else {
        const conRowCount = con.position.end - con.position.start;

        if( conRowCount <= 0 ) {
          return getAbsoluteValue( canvasWidth, CONNECTION_ROW_SIZE )
            + getAbsoluteValue( canvasWidth, CONNECTION_ARROW_SIZE ) * 2;
        }
        else {
          return getAbsoluteValue( canvasWidth, CONNECTION_ROW_SIZE ) / conRowCount
            + getAbsoluteValue( canvasWidth, CONNECTION_ARROW_SIZE ) * 2;
        }
      }

    } );

    //ShortInfo Calculation
    const affectedActions = actions.filter( a => a.position.end === i );
    const affectedDataSources = dataSources.filter( ds => ds.position.end === i );
    const affectedDataPurposes = dataPurposes.filter( dp => dp.position.end === i );

    const affectedObjects = [...affectedActions, ...affectedDataSources, ...affectedDataPurposes];

    const shortInfoHeight = affectedObjects.map( o => o.shortInfo ).filter( o => o !== undefined ).length > 0 ?
      getAbsoluteValue( canvasWidth, SHORTINFO_MARGIN_BOTTOM ) :
      0;

    const result = (affectedConnections.length > 0 ? Math.max( ...connectionTextGapHeights ) : 0) + shortInfoHeight
      || getAbsoluteValue( canvasWidth, MIN_GAP_HEIGHT );

    return {
      pos: i,
      value: result
    };
  } );

};

export const getCaseHeaderHeight = ( labels: string[], canvasWidth: number ) => {
  const caseHeaderLabelRows =
    labels.map( ( label: string ) => {
      return getStringArrayByWidth( label, canvasWidth / 100 * 25,
        getAbsoluteValue( canvasWidth, CASE_HEADER_LABEL_SIZE ) ).length;
    } ).reduce( ( sum, current ) => sum + current, 0 );

  return (caseHeaderLabelRows <= 1 ? 2 : caseHeaderLabelRows * TEXT_SPACING) * getAbsoluteValue( canvasWidth,
    CASE_HEADER_HEIGHT );
};

export const processCases = ( showDetailedModel: boolean, cases: Case[], canvasWidth: number, canvasHeight: number,
  processedParticipants: ProcessedParticipant[], openCases: string[],
  connectionTypes: ConnectionType[], isLowMode: boolean, boxTypes: BoxType[]  ): ProcessedCase[] => {

  let caseHeights = cases.map( item => {
    return { id: item.id, height: getAbsoluteValue( canvasWidth, CASE_HEADER_HEIGHT ) }
  } );

  return cases.map( ( c, index ) => {

    const rowHeights = calcRowHeights( showDetailedModel, c, processedParticipants, canvasWidth, boxTypes );

    const connectionGapHeights = calcConnectionGapHeights( showDetailedModel, rowHeights.length, c.connections,
      c.actions, c.dataSources, c.dataPurposes,
      processedParticipants, canvasWidth );

    // CASE
    const caseHeaderHeight = getCaseHeaderHeight( [c.label], canvasWidth );

    let addButtonHeight = getAbsoluteValue( canvasWidth, 6 );

    const caseHeight = rowHeights.map( item => item.value ).reduce( ( sum: number, current: number ) => {
        return sum + current;
      }, 0 )
      + connectionGapHeights.map( con => con.value ).reduce( ( sum: number, current: number ) => {
        return sum + current;
      }, 0 )
      + caseHeaderHeight
      + getAbsoluteValue( canvasWidth, CASE_PADDING_TOP )
      + getAbsoluteValue( canvasWidth, CASE_PADDING_BOTTOM )
      + addButtonHeight;

    caseHeights = caseHeights.map( item => {
      if( item.id === c.id ) {
        return openCases.includes( c.id ) ?
          { id: item.id, height: caseHeight } :
          { id: item.id, height: caseHeaderHeight }
      }
      else {
        return { id: item.id, height: item.height };
      }

    } );

    const casesHeightsAbove = caseHeights.filter( ( item, j ) => j < index ).map( item => item.height );

    const caseY = (casesHeightsAbove.length > 0 ? casesHeightsAbove.reduce( ( acc, current ) => acc + current ) : 0)
      + getAbsoluteValue( canvasWidth, HEADER_OFFSET )
      + getAbsoluteValue( canvasWidth, CASE_MARGIN_BOTTOM ) * casesHeightsAbove.length;

    let processedActions: ProcessedAction[] = [];
    // ACTIONS
    processedActions = processActions( c.actions, processedParticipants, rowHeights, connectionGapHeights,
      caseY, canvasWidth, caseHeaderHeight, showDetailedModel );

    // DATASOURCE
    const processedDataSources = processDataSources( c.dataSources, rowHeights, connectionGapHeights,
      caseY,
      canvasWidth, caseHeaderHeight );
    const processedDataPurposes = processDataPurposes( c.dataPurposes, rowHeights, connectionGapHeights,
      caseY,
      canvasWidth, caseHeaderHeight );

    let processedConnections: ProcessedConnection[] = [];
    // Connections
    processedConnections = processConnections( c.connections, connectionTypes, processedActions, processedDataSources,
      processedDataPurposes, rowHeights,
      connectionGapHeights, caseY, canvasWidth, caseHeaderHeight, showDetailedModel, isLowMode );

    return {
      id: c.id,
      label: c.label,
      dataSources: processedDataSources,
      dataPurposes: processedDataPurposes,
      actions: processedActions,
      connections: processedConnections,
      shortInfo: [],
      infoTitle: c.infoTitle,
      info: c.info,
      permissions: c.permissions,

      rowHeights: rowHeights,
      connectionGapHeights: connectionGapHeights,
      isOpen: c.isOpen,
      x: 0,
      y: caseY,
      width: canvasWidth,
      height: openCases.includes( c.id ) ? caseHeight : caseHeaderHeight,
      itemSymbols: c.itemSymbols
    }

  } );

};