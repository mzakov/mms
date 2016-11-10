package org.uaso.location;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.uaso.activity.Activity;
import org.uaso.entity.Member;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cities", uniqueConstraints=@UniqueConstraint(columnNames={"name", "region_id"}))
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable=false)
	private long id;
	
	@Column
	private String name;
	
	@Column
	private String latitude;
	
	@Column
	private String longitude;
	
	@ManyToOne(optional=false, fetch=FetchType.EAGER)
	@JoinColumn(name="region_id")
	private Region region;
	
	@OneToMany(mappedBy = "city", fetch=FetchType.LAZY)
	@JsonIgnore
	private Set<Member> members;
	
	@OneToMany(mappedBy = "city", fetch=FetchType.LAZY)
	@JsonIgnore
	private Set<Activity> activities;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}
	
	public Set<Member> getMembers() {
		return members;
	}

	public void setMembers(Set<Member> members) {
		this.members = members;
	}

	public Set<Activity> getActivities() {
		return activities;
	}

	public void setActivities(Set<Activity> activities) {
		this.activities = activities;
	}
	
}
