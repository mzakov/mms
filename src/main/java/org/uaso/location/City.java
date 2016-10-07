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

import org.uaso.activity.Course;
import org.uaso.activity.Event;
import org.uaso.entity.Member;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cities")
public class City {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable=false)
	private long id;
	
	@Column
	private String name;
	
	@ManyToOne(optional=false, fetch=FetchType.EAGER)
	@JoinColumn(name="region_id")
	private Region region;
	
	@OneToMany(mappedBy = "city", fetch=FetchType.LAZY)
	@JsonIgnore
	private Set<Member> members;
	
	@OneToMany(mappedBy = "city", fetch=FetchType.LAZY)
	@JsonIgnore
	private Set<Course> courses;
	
	@OneToMany(mappedBy = "city", fetch=FetchType.LAZY)
	@JsonIgnore
	private Set<Event> events;

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

	public Set<Course> getCourses() {
		return courses;
	}

	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}

	public Set<Event> getEvents() {
		return events;
	}

	public void setEvents(Set<Event> events) {
		this.events = events;
	}
	
}
