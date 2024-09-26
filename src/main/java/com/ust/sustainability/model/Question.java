package com.ust.sustainability.model;

import java.util.List;

public class Question {

    private String question_id;
    private String question;
    private String text;
    private List<InputField> inputFields;
    private List<Validation> validations;

    // Getters and setters


    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(String question_id) {
        this.question_id = question_id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<InputField> getInputFields() {
        return inputFields;
    }

    public void setInputFields(List<InputField> inputFields) {
        this.inputFields = inputFields;
    }

    public List<Validation> getValidations() {
        return validations;
    }

    public void setValidations(List<Validation> validations) {
        this.validations = validations;
    }
}
