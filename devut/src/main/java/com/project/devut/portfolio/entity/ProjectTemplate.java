package com.project.devut.portfolio.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.List;

@Entity
@Table(name = "PROJECT_TEMPLATE")
@Getter
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ProjectTemplate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROJECT_TEMPLATE_ID")
    private Long id;

    @OneToOne
    @JoinColumn(name = "PORTFOLIO_ID")
    private PortfolioInfo portfolioId;

    @OneToMany
    @JoinColumn(name = "PROJECT_TEMPLATE_ID")
    private List<ProjectInfo> projectInfo;
}
