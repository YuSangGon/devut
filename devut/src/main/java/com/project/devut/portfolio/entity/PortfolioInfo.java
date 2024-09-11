package com.project.devut.portfolio.entity;

import com.project.devut.common.entity.DevutUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

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

    @OneToOne
    @JoinColumn(name = "USER_ID")
    private DevutUser devutUserId;

}
