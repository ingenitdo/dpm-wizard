import { ItemSymbol } from "../../entities/ItemSymbol";
import { CustomSymbol } from "../../entities/CustomSymbol";
import { Participant } from "../../entities/Participant";
import { Case } from "../../entities/Case";
import { GlossarItem } from "../../entities/GlossarItem";

export const processGlossar = ( glossar: GlossarItem[], cases: Case[], participants: Participant[],
  keywordColor: string,
  customSymbols: CustomSymbol[] ): [Case[], Participant[]] => {

  const replaceKeyword = ( s: string, g: GlossarItem ) => {
    if( s && g.keywords && g.content) {

        let newS = s;
        const keywords = g.keywords.slice().sort( function ( a, b ) {
          return b.length - a.length;
        } );
        var i;
        for( i = 0; i < keywords.length; i++ ) {
          newS = newS.replace( new RegExp( keywords[i], 'gi' ), "###" + i + "###" );
        }
        for( i = 0; i < keywords.length; i++ ) {
          newS = newS.replace( new RegExp( "###" + i + "###", 'g' ),
            "<span id=\"" + g.id + "\" class=\"7a9bf624-ea78-4876-ac2e-fd6f8f4499c3\" style=\"color: " + keywordColor
            + "; cursor: pointer; font-weight: bold\">" + keywords[i] + "</span>" );
        }
        s = newS ? newS : s;
    }
    return s;
  };

  const replaceKeywords = ( item: any, g: GlossarItem, customSymbols: CustomSymbol[] ) => {
    if( item.itemSymbols && item.itemSymbols.length > 0 ) {
      item.itemSymbols.map( ( itemSymbol: ItemSymbol ) => {
        const customSymbol = customSymbols.find( ( cS: CustomSymbol ) => cS.id === itemSymbol.customSymbolId );
        itemSymbol.title = replaceKeyword( itemSymbol.title, g );

        if( customSymbol && customSymbol.isDialog ) {
          itemSymbol.text = replaceKeyword( itemSymbol.text, g );
        }
        return itemSymbol;
      } )
    }
  };

  glossar.map( ( g ) => {
    return [...cases.map( c => {
        replaceKeywords( c, g, customSymbols );
        c.dataSources.map( ds => replaceKeywords( ds, g, customSymbols ) );
        c.dataPurposes.map( ds => replaceKeywords( ds, g, customSymbols ) );
        c.actions.map( ds => replaceKeywords( ds, g, customSymbols ) );
        return null;
      },
      ...participants.map( ( p ) => {
        replaceKeywords( p, g, customSymbols )
      } )
    )
    ]
  } );

  return [cases, participants];
};