package com.example.demo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList();
	private static int counter = 0;

	static {
		todos.add(new Todo(++counter, "Manish", "Learn AWS", new Date(), false));
		todos.add(new Todo(++counter, "Manish", "Learn Docker", new Date(), false));
		todos.add(new Todo(++counter, "Manish", "Learn Python", new Date(), false));

	}

	public List<Todo> findAll() {

		return todos;
	}
}