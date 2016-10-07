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

import org.uaso.activity.Course;
import org.uaso.activity.Event;
import org.uaso.attribute.Gear;
import org.uaso.attribute.Skill;
import org.uaso.location.City;


@Entity
@Table (name="members")
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
	private String phoneNumber;
	
	@ManyToOne(optional=false, fetch=FetchType.EAGER)
	@JoinColumn(name="city_id")
	private City city;
	
	@Column
	private String address;
	
	@Column
	private String bio;
	
	@ManyToMany
	@JoinTable(name = "members_skills")
	private Set<Skill> skills;
	
	@ManyToMany
	@JoinTable(name = "members_gear")
	private Set<Gear> gear;
	
	@ManyToMany
	@JoinTable(name = "members_events")
	private List<Event> events;
	
	@ManyToMany
	@JoinTable(name = "members_courses")
	private List<Course> courses;
	
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

	public List<Event> getEvents() {
		return events;
	}

	public void setEvents(List<Event> events) {
		this.events = events;
	}

	public List<Course> getCourses() {
		return courses;
	}

	public void setCourses(List<Course> courses) {
		this.courses = courses;
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

	
}
