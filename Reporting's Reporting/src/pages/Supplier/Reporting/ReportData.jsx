export const ReportJSON=[
    {
      "id": "energy_report_id",
      "pillar_id": "energy_pillar",
      "pillarName": "Energy",
      "year": "2024",
      "questions": [
        {
          "question_id": "qstn_id_1",
          "question": "Are you using low-carbon or renewable energy?",
          "text": "We have installed a <field_id_1> project in <field_id_2> which is expected to generate <field_id_3> Kilowatt of energy annually for <field_id_4> years.",
          "inputFields": [
            {
              "inputId": "field_id_1",
              "label": "Energy Source",
              "inputType": "dropdown",
              "options": ["Solar Energy", "Wind Energy", "Hydropower"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_2",
              "label": "Location",
              "inputType": "dropdown",
              "options": ["Supply chain", "Manufacturing unit"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_3",
              "label": "Generated Energy (Kilowatt)",
              "inputType": "number",
              "isMandatory": true,
              "minValue": "",
              "maxValue": ""
            },
            {
              "inputId": "field_id_4",
              "label": "Duration (Years)",
              "inputType": "dropdown",
              "options": ["16-20", "21-25"],
              "isMandatory": true
            }
          ]
        },
        {
          "question_id": "qstn_id_2",
          "question": "Is your company implementing any energy efficiency or conservation projects?",
          "text": "We are implementing a <field_id_1> project in <field_id_2> that is expected to reduce energy consumption by <field_id_3>%.",
          "inputFields": [
            {
              "inputId": "field_id_1",
              "label": "projectName",
              "inputType": "text",
              "isMandatory": true
            },
            {
              "inputId": "field_id_2",
              "label": "projectLocation",
              "inputType": "text",
              "isMandatory": true
            },
            {
            "inputId": "field_id_3",
              "label": "percentageReduction",
              "inputType": "number",
              "isMandatory": true
            }
          ]
        },
        {
          "question_id": "qstn_id_3",
          "question": "Do you have any other energy saving initiatives to be reported?",
          "text": "We conducted an audit at <field_id_1> which identified opportunities to save <field_id_2> annually.",
          "inputFields": [
            {
              "inputId": "field_id_1",
              "label": "auditLocation",
              "inputType": "dropdown",
              "options": ["Office", "Factory", "Warehouse"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_2",
              "label": "potentialSavings",
              "inputType": "number",
              "isMandatory": true
            }
          ]
        }
      ]
    },
    {
      "id": "packaging_report_id",
      "pillar_id": "packaging_pillar",
      "pillarName": "Packaging",
      "year": "2024",
      "questions": [
        {
          "question_id": "qstn_id_1",
          "question": "Have you done any redesigning of your packaging to reduce the amount of material needed?",
          "text": "We have reduced <field_id_1> MT of <field_id_2> material from our total Packaging material, of which <field_id_3>% was recycled content.",
          "inputFields": [
            {
              "label": "Material Reduced",
              "inputType": "number",
              "isMandatory": true,
              "minValue": 0,
              "maxValue": "",
              "inputId": "field_id_1"
            },
            {
              "label": "Material Type",
              "inputType": "dropdown",
              "options": ["PET", "Glass", "Paper"],
              "isMandatory": true,
              "inputId": "field_id_2"
            },
            {
              "label": "Recycled Content",
              "inputType": "number",
              "isMandatory": true,
              "minValue": 0,
              "maxValue": 100,
              "inputId": "field_id_3"
            }
          ],
          "validations": [
            {
              "type": "NUMBER_RANGE",
              "inputId": "field_id_1",
              "minValue": 0
            },
            {
              "type": "DROPDOWN_OPTION",
              "inputId": "field_id_2",
              "options": ["PET", "Glass", "Paper"]
            },
            {
              "type": "NUMBER_RANGE",
              "inputId": "field_id_3",
              "minValue": 0,
              "maxValue": 100
            }
          ]
        },
        // {
        //   "question_id": "qstn_id_2",
        //   "question": "Have you substituted packaging materials with more sustainable alternatives?",
        //   "text": "",
        //   "inputFields": [],
        //   "validations": []
        // },
        // {
        //   "question_id": "qstn_id_3",
        //   "question": "Do you have any other energy saving initiatives to be reported?",
        //   "text": "",
        //   "inputFields": [],
        //   "validations": []
        // }
      ],
      "tables": [
        {
          "question_id":"qstn_id_4",
          "table_id": "tableId001",
          "note": "Please share details of Packaging materials used:",
          "labels": [
            "Packaging Use",
            "Format",
            "Material",
            "Total Weight",
            "Recyclable Weight",
            "Details of usage",
            "Details of optimization plans",
            "Tier of material"
          ],
          "rowInputs": [
            {
              "inputId": "field_id_1",
              "label": "Packaging Use",
              "inputType": "dropdown",
              "options": ["Food", "Electronics", "Apparels"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_2",
              "label": "Format",
              "inputType": "dropdown",
              "options": ["Box", "Bottle", "Tray", "Hangtags"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_3",
              "label": "Material",
              "inputType": "dropdown",
              "options": ["Paper", "Glass", "Aluminium", "PVC"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_4",
              "label": "Total Weight",
              "inputType": "number",
              "unit": "MT",
              "isMandatory": true,
              "minValue": 0
            },
            {
              "inputId": "field_id_5",
              "label": "Recyclable Weight",
              "unit": "MT",
              "inputType": "number",
              "isMandatory": true,
              "minValue": 0
            },
            {
              "inputId": "field_id_6",
              "label": "Details of usage",
              "inputType": "text",
              "isMandatory": true
            },
            {
              "inputId": "field_id_7",
              "label": "Details of optimization plans",
              "inputType": "text",
              "isMandatory": false
            },
            {
              "inputId": "field_id_8",
              "label": "Tier of material",
              "inputType": "dropdown",
              "options": ["Good", "Better", "Not Recommended"],
              "isMandatory": true
            }
          ]
        }
      ]
    },
    {
      "pillarId": "waste_pillar",
      "pillarName": "Waste",
      "year": "2024",
      "tables": [
        {
          "question_id":"qstn_id_1",
          "table_id": "tableId001",
          "note": "Please share details of  waste materials used:",
          "labels": [
            "Material",
            "Source Reduced",
            "Recycled",
            "Land Filled",
            "Combusted",
            "Total Emissions"
          ],
          "rowInputs": [
            {
              "inputId": "field_id_1",
              "label": "Material",
              "inputType": "dropdown",
              "options": ["Electronic", "Aluminium Cans", "Glass"],
              "isMandatory": true
            },
            {
              "inputId": "field_id_2",
              "label": "Source Reduced",
              "inputType": "number",
              "unit": "MT",
              "isMandatory": true
            },
            {
              "inputId": "field_id_3",
              "label": "Recycled",
              "inputType": "number",
              "unit": "MT",
              "isMandatory": true
            },
            {
              "inputId": "field_id_4",
              "label": "Land Filled",
              "inputType": "number",
              "unit": "MT",
              "isMandatory": true
            },
            {
              "inputId": "field_id_5",
              "label": "Combusted",
              "inputType": "number",
              "unit": "MT",
              "isMandatory": true
            },
            {
              "inputId": "field_id_6",
              "label": "Total Emissions",
              "inputType": "number",
              "unit": "MT",
              "isMandatory": true
            }
          ]
        }
      ],
    }
  ]