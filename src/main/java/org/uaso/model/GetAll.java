package org.uaso.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.uaso.activity.Activity;
import org.uaso.attribute.Gear;
import org.uaso.attribute.Skill;
import org.uaso.entity.Member;

public class GetAll {

	private long id;

	private Date date;
	
	private String name;
	
	private String summary;
	
	private String members;
	
	private String skills;
	
	private String gear;
	
	private Boolean training;

	public GetAll(long id, Date date, String name, String summary, String members, String skills, String gear, Boolean training) {
		super();
		this.id = id;
		this.date = date;
		this.name = name;
		this.summary = summary;
		this.members = members;
		this.skills = skills;
		this.gear = gear;
		this.training = training;
	}

	public static List<GetAll> index(List<Activity> list) {
		ArrayList<GetAll> result = new ArrayList<>();
		for (Activity course : list) {
			String memberRes = "";
			String skillRes = "";
			String gearRes = "";
			for (Member member : course.getMembers()) {
				memberRes+=member.getFirstName() + " " + member.getLastName() + "; ";
			}
			for (Skill skill : course.getSkills()) {
				skillRes+=skill.getName()+"; ";
			}
			for (Gear gear : course.getGear()) {
				
				gearRes+=gear.getName()+"; ";
			}
			
			result.add(new GetAll(course.getId(), course.getDate(), course.getName(), course.getSummary(), memberRes, skillRes, gearRes, course.getTraining()));
		}
			
		return result;
	}
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getMembers() {
		return members;
	}

	public void setMembers(String members) {
		this.members = members;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getGear() {
		return gear;
	}

	public void setGear(String gear) {
		this.gear = gear;
	}

	public Boolean getTraining() {
		return training;
	}

	public void setTraining(Boolean training) {
		this.training = training;
	}

}
