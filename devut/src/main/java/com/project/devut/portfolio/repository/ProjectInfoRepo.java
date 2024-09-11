package com.project.devut.portfolio.repository;

import com.project.devut.portfolio.entity.ProjectInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectInfoRepo extends JpaRepository<ProjectInfo, Long> {

    @Query("select p from ProjectInfo p where p.projectTemplateId = :projectTemplateId order by p.uploadOrder asc")
    List<ProjectInfo> findAllByProjectTemplateId(Long projectTemplateId);
}
