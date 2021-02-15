import {
  getStringArrayByWidth
} from "../../../../viewer/utils/Processing";
import { Model } from "../../../../entities/Model";
import { DataSource } from "../../../../entities/DataSource";
import { getAbsoluteValue } from "../../../../viewer/utils/LayoutCalc";
import { CASE_HEADER_HEIGHT, CASE_HEADER_LABEL_SIZE } from "../../../../viewer/Constants";
import { ProcessedDataSource } from "../../../../entities/ProcessedDataSource";
import { ProcessedAction } from "../../../../entities/ProcessedAction";
import { ProcessedDataPurpose } from "../../../../entities/ProcessedDataPurpose";
import { ProcessedCase } from "../../../../entities/ProcessedCase";
import { Action } from "../../../../entities/Action";
import { ProcessedConnection } from "../../../../entities/ProcessedConnection";
import { Connection } from "../../../../entities/Connection";
import { Case } from "../../../../entities/Case";
import { DataPurpose } from "../../../../entities/DataPurpose";

export function getIdByProcessedItem( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  if( "dataSource" in item ) {
    return item.dataSource.id;
  }
  if( "action" in item ) {
    return item.action.id;
  }
  if( "dataPurpose" in item ) {
    return item.dataPurpose.id;
  }
  return null;
}

export function getPositionRangeByProcessedItem( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  if( "dataSource" in item ) {
    return item.dataSource.position.end - item.dataSource.position.start + 1;
  }
  if( "action" in item ) {
    return item.action.position.end - item.action.position.start + 1;
  }
  if( "dataPurpose" in item ) {
    return item.dataPurpose.position.end - item.dataPurpose.position.start + 1;
  }
  return null;
}

export function getPositionStartByProcessedItem( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  if( "dataSource" in item ) {
    return item.dataSource.position.start;
  }
  if( "action" in item ) {
    return item.action.position.start;
  }
  if( "dataPurpose" in item ) {
    return item.dataPurpose.position.start;
  }
  return null;
}

export function getPositionEndByProcessedItem( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  if( "dataSource" in item ) {
    return item.dataSource.position.end;
  }
  if( "action" in item ) {
    return item.action.position.end;
  }
  if( "dataPurpose" in item ) {
    return item.dataPurpose.position.end;
  }
  return null;
}

export function getParticipantIdByProcessedItem( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  if( "action" in item ) {
    return item.action.participantID;
  }
  return null;
}

export function getPositionByY( y: number, canvasWidth: number, processedCase: ProcessedCase, rowHeights: any, connectionGapHeights: any, buttonSize: number ) {

  const caseHeaderLabelRows =
    [processedCase.label].map( ( label: string ) => {
      return getStringArrayByWidth( label, (canvasWidth / 100 * 25),
        getAbsoluteValue( canvasWidth, CASE_HEADER_LABEL_SIZE ) ).length;
    } ).reduce( ( sum, current ) => sum + current, 0 );

  const caseHeaderHeight = (caseHeaderLabelRows <= 1 ? 2 : caseHeaderLabelRows) * getAbsoluteValue( canvasWidth,
    CASE_HEADER_HEIGHT );

  const maxPos = rowHeights.length - 1;

  let ret = 0;

  for( let i = 0; i <= maxPos; i++ ) {

    const affectedRows = rowHeights.filter( ( a: any ) => {
      return a.pos <= i
    } );
    const affectedGaps = connectionGapHeights.filter( ( a: any ) => {
      return a.pos <= i
    } );

    const affectedRowsAndGaps = [...affectedRows, ...affectedGaps];

    const yValue = affectedRowsAndGaps.map( ( a: any ) => a.value ).reduce( ( accumulator, currentValue ) => {
      return accumulator += currentValue;
    }, caseHeaderHeight - buttonSize );

    if( yValue >= y ) {
      ret = i;
      i = maxPos + 1;
    }
  }
  return ret;
}

export function isDataSource( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  return "dataSource" in item;
}

export function isAction( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  return "action" in item;
}

export function isDataPurpose( item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose ) {
  return "dataPurpose" in item;
}

function updateConnections( caseItem: Case, itemId: string, oldStart: number, newStart: number ) {

  const affectedConnections = caseItem.connections.filter( c => {
    return c.source === itemId || c.destination === itemId;
  } );
  let conUpdateRange = newStart - oldStart;
  affectedConnections.map( (con: Connection) => {
    if( con.source === itemId ) {
      con.position.start += conUpdateRange;
    }
    if( con.destination === itemId ) {
      con.position.end += conUpdateRange;
    }
  } )
}

export function changePositon( draft: Model, caseId: string,
  item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose, newStart: number ) {
  const caseItem = draft.cases.find( c => c.id === caseId );
  const participantId = getParticipantIdByProcessedItem( item );


  let affectedItems = isDataSource( item )
    ? caseItem.dataSources
    : isAction( item )
      ? caseItem.actions.filter(a => a.participantID === participantId)
      : isDataPurpose( item )
        ? caseItem.dataPurposes
        : null;

  const sourceId = getIdByProcessedItem( item );
  const sourcePosStart = getPositionStartByProcessedItem( item );
  const sourcePosEnd = getPositionEndByProcessedItem( item );
  const sourceRange = Math.abs( sourcePosStart - sourcePosEnd );

  const source = [
    caseItem.dataSources.find(
      ds => ds.id === sourceId ),
    caseItem.dataPurposes.find(
      dp => dp.id === sourceId ),
    caseItem.actions.find(
      a => a.id === sourceId )
  ].filter( item => item !== undefined )[0];


  const destination = isDataSource( item )
    ? caseItem.dataSources.find( src => {
      return src.position.start <= newStart && src.position.end >= newStart
    } )
    : isAction( item )
      ?
      caseItem.actions.find( src => {
        return src.position.start <= newStart && src.position.end >= newStart && src.participantID === participantId
      } )
      : isDataPurpose( item )
        ?
        caseItem.dataPurposes.find( src => {
          return src.position.start <= newStart && src.position.end >= newStart
        } )
        : null;

  let updateRange = 0;
  let newEnd = 0;


  if( newStart !== null ) {

    if( destination && destination != source ) {
      const destinationPosStart = destination.position.start;
      const destinationPosEnd = destination.position.end;
      const destinationRange = Math.abs( destinationPosStart - destinationPosEnd );

      if( sourcePosStart < newStart ) {
        let newSourceStart = newStart;
        let newSourceEnd = newSourceStart + sourceRange;

        let newDestinationStart = sourcePosStart;
        let newDestinationEnd = newDestinationStart + destinationRange;

        if( newDestinationStart + destinationRange >= newStart ) {
          newDestinationStart = newStart + sourceRange + 1;
          newDestinationEnd = newDestinationStart + destinationRange;
        }
        destination.position.start = newDestinationStart;
        destination.position.end = newDestinationEnd;
        updateConnections( caseItem, destination.id, destinationPosStart, newDestinationStart );

        affectedItems.map( ds => {
          if( ds.position.start >= newDestinationStart && ds.position.start
            <= newDestinationEnd ) {

            if( updateRange === 0 ) {
              updateRange = Math.abs( newDestinationStart - ds.position.start );
            }
            ds.position.start = ds.position.start + updateRange;
            ds.position.end = ds.position.end + updateRange;
            updateConnections( caseItem, ds.id, ds.position.start - updateRange, ds.position.start );

          }
        } );

        updateRange = 0;

        source.position.start = newSourceStart;
        source.position.end = newSourceEnd;
        updateConnections( caseItem, source.id, sourcePosStart, newSourceStart );

        affectedItems.map( ds => {
          if( ds.position.start >= newSourceStart && ds.position.start <= newSourceEnd ) {
            if( updateRange === 0 ) {
              updateRange = Math.abs( newSourceStart - ds.position.start );
            }
            ds.position.start = ds.position.start + updateRange;
            ds.position.end = ds.position.end + updateRange;
            updateConnections( caseItem, ds.id, ds.position.start - updateRange, ds.position.start );
          }
        } );
      }
      else {

        newEnd = newStart + sourceRange;

        affectedItems.map( ds => {
          if( ds.position.start >= newStart && ds.position.start <= newEnd ) {
            if( updateRange === 0 ) {
              updateRange = Math.abs( newStart - newEnd );
            }
            ds.position.start = ds.position.start + updateRange;
            ds.position.end = ds.position.end + updateRange;
            updateConnections( caseItem, ds.id, ds.position.start - updateRange, ds.position.start );
          }
        } );
        source.position.start = newStart;
        source.position.end = newStart + sourceRange;
        updateConnections( caseItem, source.id, sourcePosStart, newStart );

        const newDestinationStart = (newStart + sourceRange) >= sourcePosStart ?
          (newStart + sourceRange + 1) :
          sourcePosStart;
        const newDestinationEnd = newDestinationStart + destinationRange;
        updateRange = 0;

        affectedItems.map( ds => {
          if( ds.position.start >= newDestinationStart && ds.position.start
            <= newDestinationEnd ) {
            if( updateRange === 0 ) {
              updateRange = Math.abs( newDestinationStart - ds.position.start );

            }
            ds.position.start = ds.position.start + updateRange;
            ds.position.end = ds.position.end + updateRange;
            updateConnections( caseItem, ds.id, ds.position.start - updateRange, ds.position.start );
          }
        } );
        destination.position.start = newDestinationStart;
        destination.position.end = newDestinationEnd;
        updateConnections( caseItem, destination.id, destinationPosStart, newDestinationStart );
      }
    }
    else {

      const newSourceStart = newStart;
      const newSourceEnd = newStart + sourceRange;

      affectedItems.map( ds => {
        if( ds.position.start >= newSourceStart && ds.position.start <= newSourceEnd && ds !== source ) {
          if( updateRange === 0 ) {
            updateRange = Math.abs( newSourceStart - ds.position.start );
          }

          ds.position.start = ds.position.start + updateRange;
          ds.position.end = ds.position.end + updateRange;
          updateConnections( caseItem, ds.id, ds.position.start - updateRange, ds.position.start );
        }
      } );
      source.position.start = newSourceStart;
      source.position.end = newSourceEnd;
      updateConnections( caseItem, source.id, sourcePosStart, newSourceStart );

    }
  }

  caseItem.dataSources.sort( ( a: DataSource, b: DataSource ) => {
    return a.position.start - b.position.start;
  } );
}


const changeItemSize = (caseItem: Case, item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose, size: number) => {

  let affectedItems: any[] = [];
  let change = false;

  if("action" in item) {
    const action = caseItem.actions.find(
      ds => ds.id === item.action.id );
    affectedItems = caseItem.actions.filter((a: Action) => { return a.participantID === action.participantID && a.position.start > action.position.end});
    if(!(size === -1 && action.position.start === action.position.end)) {
      action.position.end += size;
      change = true;
    }

  } else if("dataSource" in item) {
    const dataSource = caseItem.dataSources.find(
      ds => ds.id === item.dataSource.id );
    affectedItems = caseItem.dataSources.filter((a: DataSource) => { return a.position.start > dataSource.position.end});
    if(!(size === -1 && dataSource.position.start === dataSource.position.end)) {
      dataSource.position.end += size;
      change = true;
    }

  } else if("dataPurpose" in item) {
    const dataPurpose = caseItem.dataPurposes.find(
      ds => ds.id === item.dataPurpose.id );
    affectedItems = caseItem.dataPurposes.filter((a: DataPurpose) => { return a.position.start > dataPurpose.position.end});
      if(!(size === -1 && dataPurpose.position.start === dataPurpose.position.end)) {
        dataPurpose.position.end += size;
        change = true;
      }
  }

  if(change && affectedItems.length > 0) {
    affectedItems.map( a => {
      a.position.start += size;
      a.position.end += size;

      updateConnections( caseItem, a.id, a.position.start, a.position.start + size );
    } );
  }
}
export const increaseItemSize = (draft: Model, caseId: string,
  item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose) => {
  const caseItem = draft.cases.find( c => c.id === caseId );

  changeItemSize(caseItem, item, 1);
};

export const decreaseItemSize = (draft: Model, caseId: string,
  item: ProcessedDataSource | ProcessedAction | ProcessedDataPurpose) => {
  const caseItem = draft.cases.find( c => c.id === caseId );

  changeItemSize(caseItem, item, -1);
}