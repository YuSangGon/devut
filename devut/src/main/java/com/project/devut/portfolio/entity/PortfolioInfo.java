package com.project.devut.portfolio.entity;

import com.project.devut.common.entity.DevutUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.List;

@Entity
@Table(name = "PORTFOLIO_INFO")
@Getter
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class PortfolioInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PORTFOLIO_ID")
    private Long portfolioId;

    @Column(name = "HEADER_BACKGROUND_COLOR", length = 10)
    @ColumnDefault("'#ffffff'")
    private String headerBackgroundColor;

    @Column(name = "CONTENT_BACKGROUND_COLOR", length = 10)
    @ColumnDefault("'#ffffff'")
    private String contentBackgroundColor;

    @Column(name = "HEADER_COLOR", length = 10)
    @ColumnDefault("'#000000'")
    private String headerColor;

    @Column(name = "CONTENT_COLOR", length = 10)
    @ColumnDefault("'#000000'")
    private String contentColor;

    @OneToOne
    @JoinColumn(name = "USER_ID")
    private DevutUser devutUserId;

    @OneToMany
    @JoinColumn(name = "PORTFOLIO_ID")
    private List<ProjectInfo> projectInfoList;

}
