package org.uaso.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.uaso.activity.Course;
import org.uaso.attribute.Gear;
import org.uaso.attribute.Skill;

public class GetAll {

	private long id;

	private Date date;
	
	private String name;
	
	private String summary;
	
	private List<String> skills;
	
	private List<String> gear;

	public GetAll(long id, Date date, String name, String summary, List<String> skills, List<String> gear) {
		super();
		this.id = id;
		this.date = date;
		this.name = name;
		this.summary = summary;
		this.skills = skills;
		this.gear = gear;
	}

	public static List<GetAll> index(List<Course> list) {
		ArrayList<GetAll> result = new ArrayList<>();
		for (Course course : list) {
			List<String> skillRes = null;
			List<String> gearRes = null;
			for (Skill skill : course.getSkills()) {
				skillRes.add(skill.getName());
			}
			for (Gear gear : course.getGear()) {
				
				gearRes.add(gear.getName());
			}	
			result.add(new GetAll(course.getId(), course.getDate(), course.getName(), course.getSummary(), skillRes, gearRes));
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

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}

	public List<String> getGear() {
		return gear;
	}

	public void setGear(List<String> gear) {
		this.gear = gear;
	}

}
