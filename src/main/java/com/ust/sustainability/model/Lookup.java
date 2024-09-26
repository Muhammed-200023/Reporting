package com.ust.sustainability.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "lookup")
public class Lookup {
    @Id
    private String id;
    private String pillar_id;
    private String pillarName;
    private List<LookupQuestion> question;

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPillar_id() {
        return pillar_id;
    }

    public void setPillar_id(String pillar_id) {
        this.pillar_id = pillar_id;
    }

    public String getPillarName() {
        return pillarName;
    }

    public void setPillarName(String pillarName) {
        this.pillarName = pillarName;
    }

    public List<LookupQuestion> getQuestion() {
        return question;
    }

    public void setQuestion(List<LookupQuestion> question) {
        this.question = question;
    }
}
