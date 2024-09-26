package com.ust.sustainability.model;

import java.util.List;

public class Validation {

    private String validationQuestionId;
    private String type;
    private List<String> relatedIds;

    // Getters and setters

    public String getValidationQuestionId() {
        return validationQuestionId;
    }

    public void setValidationQuestionId(String validationQuestionId) {
        this.validationQuestionId = validationQuestionId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<String> getRelatedIds() {
        return relatedIds;
    }

    public void setRelatedIds(List<String> relatedIds) {
        this.relatedIds = relatedIds;
    }
}
