package com.codewars.jspiders.service;

import java.util.Optional;

import com.codewars.jspiders.entity.User;

public interface UserService {

	User saveUser(User user);

	Optional<User> getUserById(long id);

	Optional<User> updateUser(long userId, User user);

	void deleteUser(long id);

	boolean isUserExistsByEmail(String email);

	User findByEmail(String email);
}
