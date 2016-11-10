package org.uaso.entity;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.uaso.activity.Activity;
import org.uaso.attribute.Gear;
import org.uaso.attribute.Skill;
import org.uaso.location.City;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table (name="members", uniqueConstraints=@UniqueConstraint(columnNames={"firstName", "middleName", "lastName"}))
public class Member {

	Date created;
	Date updated;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable=false)
	private long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="creation_date", insertable = false, updatable = false)
	private Date creationDate() {
		return created;
	};
	
	@PrePersist
	protected void onCreate() {
		created = new Date();
	};
	
	@PreUpdate
	protected void onUpdate() {
		updated = new Date();
	};
	
	@Column
	private String firstName;

	@Column
	private String middleName;
	
	@Column
	private String lastName;
	
	@Column
	private Date birthDate;
	
	@Column
	private String phoneNumber;
	
	@Column
	private String email;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="city_id")
	private City city;
	
	@Column
	private String address;
	
	@Column
	private String bio;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "members_skills")
	private Set<Skill> skills;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "members_gear")
	private Set<Gear> gear;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "members")
	private List<Activity> activities;
	
	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Set<Skill> getSkills() {
		return skills;
	}

	public void setSkills(Set<Skill> skills) {
		this.skills = skills;
	}

	public List<Activity> getActivities() {
		return activities;
	}

	public void setActivities(List<Activity> activities) {
		this.activities = activities;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Set<Gear> getGear() {
		return gear;
	}

	public void setGear(Set<Gear> gear) {
		this.gear = gear;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
}
