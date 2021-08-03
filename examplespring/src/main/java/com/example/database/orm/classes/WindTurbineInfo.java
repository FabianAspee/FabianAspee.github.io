package com.example.database.orm.classes;


import javax.persistence.*;

@Entity
@Table(name="wind_turbine_info")
public class WindTurbineInfo {

    private Long id;
    private String accessPoint;
    private String windPowerPlant;
    private String folderName;
    private String tensionLine;
    private String turbineName;
    private Boolean haveTorquer;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId(){
        return this.id;
    }
    private void setId(Long id) {
        this.id = id;
    }

    @Column(name = "access_point")
    public void setAccessPoint(String accessPoint) {
        this.accessPoint = accessPoint;
    }

    @Column(name = "access_point")
    public String getAccessPoint() {
        return accessPoint;
    }

    @Column(name = "folder_name")
    public void setFolderName(String folderName) {
        this.folderName = folderName;
    }

    @Column(name = "folder_name")
    public String getFolderName() {
        return folderName;
    }

    @Column(name = "turbine_name")
    public void setTurbineName(String turbineName) {
        this.turbineName = turbineName;
    }

    @Column(name = "turbine_name")
    public String getTurbineName() {
        return turbineName;
    }

    @Column(name = "tension_line")
    public void setTensionLine(String tensionLine) {
        this.tensionLine = tensionLine;
    }

    @Column(name = "tension_line")
    public String getTensionLine() {
        return tensionLine;
    }

    @Column(name = "wind_power_plant")
    public void setWindPowerPlant(String windPowerPlant) {
        this.windPowerPlant = windPowerPlant;
    }

    @Column(name = "wind_power_plant")
    public String getWindPowerPlant() {
        return windPowerPlant;
    }

    @Column(name = "have_torquer")
    public void setHaveTorquer(Boolean haveTorquer) {
        this.haveTorquer = haveTorquer;
    }

    @Column(name = "have_torquer")
    public Boolean getHaveTorquer() {
        return haveTorquer;
    }
}
