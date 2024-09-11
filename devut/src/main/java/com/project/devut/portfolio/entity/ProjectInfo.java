package com.project.devut.portfolio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;

@Entity
@Table(name = "PROJECT_INFO")
@Getter
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ProjectInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROJECT_INFO_ID")
    private Long id;

    @Column(name = "PROJECT_TEMPLATE_ID", nullable = false)
    private Long projectTemplateId;

    @Column(name = "PROJECT_TITLE")
    private String projectTitle;

    @Column(name = "PROJECT_DESCRIPTION")
    private String projectDescription;

    @Column(name = "PROJECT_LINK")
    private String projectLink;

    @Column(name = "PROJECT_STARTED_AT")
    private LocalDate projectStartedAt;

    @Column(name = "PROJECT_ENDED_AT")
    private LocalDate projectEndedAt;

    @Column(name = "LANGUAGES")
    private String languages;

    @Column(name = "UPLOAD_ORDER")
    private Integer uploadOrder;

    @Column(name = "USED_YN")
    @ColumnDefault(value = "true")
    private Boolean usedYn;
}
