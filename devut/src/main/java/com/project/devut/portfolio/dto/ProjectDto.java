package com.project.devut.portfolio.dto;

import com.project.devut.portfolio.entity.ProjectInfo;
import lombok.Data;

import java.util.List;

@Data
public class ProjectDto {
    private Long projectTemplateId;
    private List<ProjectInfo> projectList;
    private List<Long> delList;
}
