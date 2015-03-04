var charts = {
    Capabilities: {
        'Digital course completions': {
            sheetName: 'Capabilities',
            dataRange: "A1:C100",
            chartOptions: {
                chartType: 'bar'
            }
        },
        'Commercial course completions': {
            sheetName: 'Capabilities_0',
            dataRange: "A1:C100",
            chartOptions: {
                chartType: 'bar'
            }
        },
        'PPM course completions': {
            sheetName: 'Capabilities_1',
            dataRange: "A1:C100",
            chartOptions: {
                chartType: 'bar'
            }
        },
        'Leading and managing change course completions':{
            sheetName: 'Capabilities_2',
            dataRange: "A1:C100",
            chartOptions: {
                chartType: 'bar'
            }
        },
        '% completing CO Comms Pulse Survey': {
            sheetName: 'Capabilities_3',
            chartOptions: {
                vAxis: {format: "##%"}
            }
        },
        'People survey - L&D index score': {
            sheetName: 'Capabilities_4',
            chartOptions: {
                vAxis: {format: "##%"}
            }
        },
        'Total volume of secondments out of and into to Civil Service': {
            sheetName: 'Capabilities_5'
        },
        'Number of commercial roles filled externally':{
            sheetName: 'Capabilities_6'
        }
    },
    Digital: {
        'GDS Transformation Savings 2013/14': {
            sheetName: 'Digital_1',
            dataRange: "A1B6",
            chartOptions: {
                vAxis: {format: "##%"},
                chartType: "pie"
            }
        },
        'Digital and ICT spend controls and wider savings':{
            sheetName: 'Digital_1_2'
        },
        'Number of department and ALB websites transferred to gov.uk': {
            sheetName: 'Digital_2'
        },
        'Number of unique visitors to gov.uk': {
            sheetName: 'Digital_3'
        },
        'Average cost per transaction': {
            sheetName: 'Digital_4'
        },
        '% digital take up': {
            sheetName: 'Digital_5'
        },
        'Average user satisfaction': {
            sheetName: 'Digital_6'
        },
        '# of CS completing CSL and GDS digital skills training': {
            sheetName: 'Digital_7'
        },
        'Number of digital and IT roles filled externally': {
            sheetName: 'Digital_8'
        }
    },
    TW3: {
        '% of senior managers demonstrating smart working': {
            sheetName: 'TW3'
        },
        '% of CS who feel empowered to use smarter working': {
            sheetName: 'TW3_1'
        },
        '% of CS who feel they have better work-life balance due to smart working': {
            sheetName: 'TW3_2'
        },
        '% of staff using lap tops / other mobile devices e.g. Tablets': {
            sheetName: 'TW3_3'
        },
        '% of staff in government buildings with access to WiFi': {
            sheetName: 'TW3_4'
        },
        'Sickness absence': {
            sheetName: 'TW3_5'
        },
        'Estate efficiency savings': {
            sheetName: 'TW3_6'
        },
        'Year on Year reduction in number of Government buildings': {
            sheetName: 'TW3_7'
        },
        'M2 per FTE': {
            sheetName: 'TW3_8'
        },
        'Desk: FTE ratio': {
            sheetName: 'TW3_9'
        },
        'Paper use across Government': {
            sheetName: 'TW3_10'
        },
        'CO2 emissions from domestic and overseas travel': {
            sheetName: 'TW3_11'
        }
    },
    OPM: {
        '% policy professionals that think Civil Service policy advice is always or mostly designed and implemented in a practical way': {
            sheetName: 'OPM'
        },
        '% operational delivery professionals that think Civil Service policy advice is always or mostly designed and implemented in a practical way': {
            sheetName: 'OPM_1'
        }
    },
    MPA: {
        '% of projects RAG-rated as green, amber-green, amber, amber-red, red': {
            sheetName: 'MPA_1'
        },
        'ERG project cluster savings':{
            sheetName: 'MPA_2'
        },
        '% of total MPA budget spent on projects RAG-rated as green, amber-green, amber, amber-red, red': {
            sheetName: 'MPA_3'
        },
        'Number of eligible Senior Responsible Officers and Project Directors currently enrolled at the  Major Projects Leadership Academy (MPLA)': {
            sheetName: 'MPA_4'
        },
        'Number of graduates of MPLA': {
            sheetName: 'MPA_5'
        },
        'Number of CSL course completions for PPM courses (e-learning and face to face combined)': {
            sheetName: 'MPA_6'
        },
        'SRO turnover': {
            sheetName: 'MPA_7'
        }
    },
    CS21: {
        '% of staff who believe that the board has a clear vision for the future': {
            sheetName: 'CS21'
        },
        '% of staff who believe the actions of senior managers are consistent with their organisation\'s values': {
            sheetName: 'CS21_1'
        },
        '% of staff who believe that they are trusted to carry out their job effectively':{
            sheetName: 'CS21_2'
        },
        '% of staff who believe that poor performance is dealt with effectively in their team':{
            sheetName: 'CS21_3'
        },
        '% of staff who believe that their performance is evaluated on whether they get things done, rather than solely follow process':{
            sheetName: 'CS21_4'
        },
        'Number of people on secondments outside of the Civil Service':{
            sheetName: 'CS21_5'
        },
        '% of staff who think that my organisation respects individual differences':{
            sheetName: 'CS21_6'
        },
        '% of staff who believe they would be supported if they try a new idea, even if it may not work':{
            sheetName: 'CS21_7'
        },
        '% of staff who believe that the people in their team are encouraged to come up with new and better ways of doing things':{
            sheetName: 'CS21_8'
        }
    }
};