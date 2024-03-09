package com.example.backend.service;

import com.example.backend.model.Lab;
import com.example.backend.model.Question;
import com.example.backend.repository.LabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class LabService {
    @Autowired
    private LabRepository labRepository;

    public List<Question> getAllQuestionsByLabId(Long labid) {
        Optional<Lab> labOptional = labRepository.findByLabid(labid);
        return labOptional.map(Lab::getQuestions).orElse(Collections.emptyList());
    }
//    public void setAllQuestionsByLabId(Long labid) {
//        Optional<Lab> labOptional = labRepository.findByLabid(labid);
//        labOptional.map(Lab::setQuestions);
//    }
//
public Lab addQuestionToLab(long labid, Question question) {
    Optional<Lab> optionalLab = labRepository.findByLabid(labid);
    if (optionalLab.isPresent()) {
        Lab lab = optionalLab.get();
        lab.getQuestions().add(question);
        return labRepository.save(lab);
    }
    return null; // Handle not found scenario
}

}
