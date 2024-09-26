import React, { useState, useEffect } from "react";
import Addbtn from "./Button/Addbtn";
import Deletebtn from "./Button/Deletebtn";
import { Button, Input, Switch } from "antd";
import { QuestionGenerator } from "./QuestionGenerator";
import { TablesGenerator } from "./TablesGenerator";
import { useDispatch, useSelector } from "react-redux";
import {setReportForm,setSwitchState,setEmissionSaved} from "../../redux/slices/reportingSlice";

const GenerateTabContent = ({ Data }) => {
  const dispatch = useDispatch();
  const { ReportForm, SwitchState, LookupTable, emissionSaved } = useSelector(
    (state) => state.reporting
  );

  const handleInputChange = (pillarName, questionId, inputId, value) => {
    dispatch(setReportForm({ pillarName, questionId, inputId, value }));
  };

  const handleCalculation = (pillarName, questionId, ReportForm, Lookup) => {
    const inputs = ReportForm[pillarName]?.[questionId]?.inputFields;
    const pillarData = Lookup.find((pillar) => pillar.pillarName === pillarName);
    const questionData = pillarData.question.find((question) => question.questionId === questionId);
    const lookupEntry = questionData.lookup.find((entry) => {
      return Object.keys(inputs).every((inputFieldId) => {
        if (entry.hasOwnProperty(inputFieldId)) {
          if (entry[inputFieldId] === null) {
          } else {
            console.log(`${inputs[inputFieldId]} == ${entry[inputFieldId]}`);
            return String(inputs[inputFieldId]) === String(entry[inputFieldId]);
          }
        } else {
          return true;
        }
      });
    });
    
    if (!lookupEntry) {
      console.log("No matching lookup entry found");
    } else {
      console.log("Matching lookup entry:", lookupEntry);
    }
    
    console.log(inputs)
    console.log(questionData)
    console.log(lookupEntry)
    const referenceValue = lookupEntry.referenceValue;
    let formula = questionData.formula;


    Object.keys(inputs).forEach((inputFieldId) => {
      formula = formula.replace(inputFieldId, inputs[inputFieldId]);
    });
     formula = formula.replace("referenceValue", referenceValue);

    try {
      const result = eval(formula); 
      console.log(result);
      dispatch(setEmissionSaved({ pillarName, questionId, value: result }));
    } catch (error) {
      console.error("Error evaluating formula:", error);
    }
  };

  // Function to render question content
  const QuestionContent = (Data) => {
    const handleSwitchChange = (pillarName, questionId, value) => {
      dispatch(setSwitchState({ pillarName, questionId, value }));
    };

    return Data?.questions?.map((question, index) => (
      <div key={index} className="w-auto   flex p-4">
        {question?.question ? (
          <div className="question-container border-grey  border-b-[1.5px] pb-5 flex-1 ml-5">
            <div className="question-box flex items-center">
              <p className="question-text font-semibold">
                {index + 1}. {question.question}
              </p>
              <div className="ml-3 pr-5">
                <Switch
                  checkedChildren="Yes"
                  unCheckedChildren="No"
                  onChange={(value) =>
                    handleSwitchChange(
                      Data.pillarName,
                      question.question_id,
                      value
                    )
                  }
                  defaultChecked={false}
                />
              </div>
            </div>

            {SwitchState?.[Data.pillarName]?.[question.question_id] && (
              <div>
                <div className="mt-[5px] ml-[15px] border-[1px] p-[10px] border-dashed border-[#1F405A] rounded-[10px] flex justify-between items-start mr-[75px]">
                  <div>
                    {QuestionGenerator(
                      question.text,
                      question.inputFields,
                      question.question_id,
                      handleInputChange,
                      Data.pillarName,
                      ReportForm
                    )}
                  </div>
                  <div className="ml-[10px] flex flex-col gap-1 justify-center">
                    <Addbtn />
                    <Deletebtn />
                  </div>
                </div>
                <div className="mt-2 ml-[15px]">
                  {emissionSaved?.[Data.pillarName]?.[question.question_id] && (
                    <h1 className="mt-4 mb-4 font-semibold">
                      EmissionSaved:
                      <Input 
                        className="w-[75px] bg-[#EAF5FF] ml-[4px]"
                        value={
                          emissionSaved[Data.pillarName][question.question_id]
                        }
                      />
                    </h1>
                  )}
                  <Button
                    className="bg-[#1F405A] text-white"
                    onClick={() =>
                      handleCalculation(
                        Data.pillarName,
                        question.question_id,
                        ReportForm,
                        LookupTable
                      )
                    }
                  >
                    Calculate
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 ml-5 mr-15 flex justify-between items-start">
            <div>
              {QuestionGenerator(
                question.text,
                question.inputFields,
                question.questionId,
                handleInputChange,
                Data.pillarName 
              )}
            </div>
            <div className="ml-[10px] flex flex-col gap-1 justify-center">
              <Addbtn />
              <Deletebtn />
            </div>
          </div>
        )}
      </div>
    ));
  };

  // Function to render table content
  const TableContent = (Data) => {
    return Data?.tables?.map((table, tableIndex) => (
      <div key={tableIndex} className="mt-3 p-[30px]">
        {TablesGenerator({
          questionId: table.question_id,
          labels: table.labels,
          rowInputs: table.rowInputs,
          tableId: table.table_id,
          note: table.note,
          pillarName: Data.pillarName,
          handleInputChange,
          ReportForm,
        })}
        <div className="mt-2 ml-[15px]">
          {emissionSaved?.[Data.pillarName]?.[table.question_id] && (
            <h1 className="mt-4 mb-4 font-semibold">
              EmissionSaved:
              <Input 
                className="w-[75px] bg-[#EAF5FF] ml-[4px]"
                value={emissionSaved[Data.pillarName][table.question_id]}
              />
            </h1>
          )}
          <Button
            className="bg-[#1F405A] text-white"
            onClick={() =>
              handleCalculation(
                Data.pillarName,
                table.question_id,
                ReportForm,
                LookupTable
              )
            }
          >
            Calculate
          </Button>
        </div>
      </div>
    ));
  };

  // useEffect(() => {
  //   const fields = ReportForm;

  //   console.log(fields);
  // }, [ReportForm]);

  // useEffect(() => {
  //   console.log(emissionSaved);
  //   console.log(SwitchState)
  // });

  return (
    <>
      {QuestionContent(Data)}
      {TableContent(Data)}
    </>
  );
};

export default GenerateTabContent;
