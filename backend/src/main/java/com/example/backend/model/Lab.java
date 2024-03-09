package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Lab {
    @Id
    private long labid;
    private String title;

    public long getLabid() {
        return labid;
    }

    public void setLabid(long labid) {
        this.labid = labid;
    }

    private String description;

    @OneToMany(targetEntity = Question.class, cascade = CascadeType.ALL)
    @JoinColumn(name="lab", referencedColumnName = "labid")
    private List<Question> questions;


    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }





    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
