package com.project.devut.portfolio.controller;

import com.project.devut.portfolio.entity.ProjectInfo;
import com.project.devut.portfolio.repository.ProjectInfoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/portfolio")
public class ProjectController {

    private final ProjectInfoRepo projectInfoRepo;

    @GetMapping("/list/{id}")
    public ResponseEntity<?> list(@PathVariable Long id) {
        return ResponseEntity.ok(projectInfoRepo.findAllByProjectTemplateId(id));
    }

}
