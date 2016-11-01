package org.uaso.activity;

import java.util.Date;
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

import org.uaso.attribute.Gear;
import org.uaso.attribute.Skill;
import org.uaso.entity.Member;
import org.uaso.location.City;

@Entity
@Table(name = "events")
public class Event extends Activity{

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
	private String latitude;
	
	@Column
	private String longitude;
	
	@Column
	private String address;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="city_id")
	private City city;
	
	@Column
	private Date date;
	
	@Column
	private String name;
	
	@Column
	private String summary;

	@Column
	private String brief;
	
	@Column
	private String debrief;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "members_events")
	private Set<Member> members;
	
	@ManyToMany
	@JoinTable(name = "events_skills")
	private Set<Skill> skills;
	
	@ManyToMany
	@JoinTable(name = "events_gear")
	private Set<Gear> gear;
	
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getDebrief() {
		return debrief;
	}

	public void setDebrief(String debrief) {
		this.debrief = debrief;
	}

	public Set<Member> getMembers() {
		return members;
	}

	public void setMembers(Set<Member> members) {
		this.members = members;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Set<Skill> getSkills() {
		return skills;
	}

	public void setSkills(Set<Skill> skills) {
		this.skills = skills;
	}

	public Set<Gear> getGear() {
		return gear;
	}

	public void setGear(Set<Gear> gear) {
		this.gear = gear;
	}

}
