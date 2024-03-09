package com.example.backend.controller;

import com.example.backend.model.Lab;
import com.example.backend.model.Question;
import com.example.backend.repository.LabRepository;
import com.example.backend.repository.QuestionRepository;
import com.example.backend.service.LabService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("http://localhost:5173")
public class LabController {
    @Autowired
    private LabService labService;

    @Autowired
    private LabRepository labRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/labs")
    List<Lab> getAllLabs() {
        return labRepository.findAll();
    }

    @GetMapping("/{labid}/questions")
    public ResponseEntity<List<Question>> getAllQuestionsByLabId(@PathVariable Long labid) {
        List<Question> questions = labService.getAllQuestionsByLabId(labid);
        return ResponseEntity.ok(questions);
    }

    @PostMapping("/addLabs")
    Lab newLab(@RequestBody Lab newLab) {
        return labRepository.save(newLab);
    }

    @PostMapping("/{labid}/addQuestions")
    public ResponseEntity<String> addQuestions(@PathVariable Long labid, @RequestBody Question question) {
        labService.addQuestionToLab(labid,question);
        //labRepository.save(labRepository.findByLabid(labid));
        // Return a response based on the result
        return ResponseEntity.ok("Questions added successfully");
        // Adjust the response as needed
    }
//    Question newQuestion(@RequestBody Question newQuestion) {
//          return questionRepository.save(newQuestion);
//    }


}
