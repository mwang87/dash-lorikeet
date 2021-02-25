import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from "./jquery.min.js"
import "./jquery-ui.min.js"
import "./jquery.flot.js"
import "./jquery.flot.selection.js"

import "./specview.js"
import "./peptide.js"
import "./aminoacid.js"
import "./ion.js"

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Dashlorikeet extends Component {
    componentDidMount() {
        // Jquery here $(...)...
        var precursorPeaks = [[602.1702270507812,209860.34],
                                [691.6718139648438,33731.582],
                                [871.4249877929688,236841.11],
                                [888.5086059570312,1005389.56],
                                [896.5921020507812,60900.184],
                                [917.42578125,169028.64],
                                [970.8433837890625,357021.0],
                                [972.9267578125,138951.6],
                                [1121.929443359375,716169.7]];

        var ms2peaks = [[276.1717224121094,778.2474],
                        [277.35040283203125,1565.7249],
                        [283.2767333984375,5452.8926],
                        [294.2132263183594,2627.3547]]
        var variableMods = [];
        var charge = 2;
        var scanNum = 36578;
        var sequence = "SLEDLDKEMADYFEK";
        var fileName = "22July09-FASP-1-02";
        var precursorMz = 917.849975586;
        var staticMods = [{"modMass":57.0,"aminoAcid":"C"}];
        var zoomMs1 = "true";
        var ms1scanLabel = "36571 RT: 4900.87000";

        console.log(this.props.id)
        
        // $("#" + this.props.id).specview({"sequence":sequence,
		// 						"scanNum":scanNum,
		// 						"charge":charge,
		// 						"precursorMz":precursorMz,
		// 						"fileName":fileName,
        //                         "precursorMassType": "mono",
        //                         "fragmentMassType": "mono",
		// 						"staticMods":staticMods,
		// 						"variableMods":variableMods,
		// 						"ms1peaks": ms1peaks,
		// 						"ms1scanLabel":ms1scanLabel,
		// 						"precursorPeaks": precursorPeaks,
		// 						"zoomMs1": zoomMs1,
		// 						"precursorPeakClickFn": precursorPeakClicked,
		// 						"peaks": ms2peaks,
        //                         "showSequenceInfo": true,
        //                         "showOptionsTable": true,
        //                         "showIonTable": true,
        //                         "showViewingOptions": true,
        //                         "showMassErrorPlot": true,
        //                         "width": 700,
        //                         "height": 450});

        console.log("HERE")
    }
    
    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
                ExampleComponent: {label}&nbsp;
                <input
                    value={value}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ value: e.target.value })
                    }
                />
            </div>
        );
    }
}

Dashlorikeet.defaultProps = {};

Dashlorikeet.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
