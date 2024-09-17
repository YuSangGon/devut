package com.project.devut.portfolio.controller;

import com.project.devut.portfolio.dto.ProjectDto;
import com.project.devut.portfolio.entity.ProjectInfo;
import com.project.devut.portfolio.repository.ProjectInfoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/portfolio/project")
public class ProjectController {

    private final ProjectInfoRepo projectInfoRepo;

    @GetMapping("/list/{projectTemplateId}")
    public ResponseEntity<?> list(@PathVariable Long projectTemplateId) {
        return ResponseEntity.ok(projectInfoRepo.findAllByProjectTemplateId(projectTemplateId));
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody ProjectDto dto) {
        List<ProjectInfo> saveList = dto.getProjectList().stream()
                .filter(project -> !dto.getDelList().contains(project.getId()))
                .toList();
        projectInfoRepo.saveAll(saveList);
        projectInfoRepo.deleteAllById(dto.getDelList());
        return ResponseEntity.ok(1);
    }

    @GetMapping("/delete/{projectInfoId}")
    public ResponseEntity<?> delete(@PathVariable Long projectInfoId) {
        projectInfoRepo.deleteById(projectInfoId);
        return ResponseEntity.ok(1);
    }

}
