## Spring Boot Starter Web

`Spring-Boot-Starter-Web` is one of Spring Boot's most popular dependency, designed to facilitate the development of web applications such as Restful APIs or complete web applications based on MVC (Mode-View-Controller) pattern. It brings together a set of automatic libraries and settings that allow you to quickly start building HTTP endpoints without having to configure everything manually.

**Modules included:**

- `spring-boot-starter` and his modules.
- `spring-web` - Support to servlets and integration with web technologies.
- `spring-webmvc` - MVC standard implementation and REST support.
- `spring-boot-starter-tomcat` - Tomcat built-in server (default, but can be replaced by Jetty or Undertow).
- `jackson-databind` - Library for JSON serialization/deserialization.

## Annotations

(spring-web) `@ControllerAdvice`: Defines a global exception or settings manipulator.

(spring-web) `@ResponseBody`: Indicates that the return is serialized directly (used in @Controller).

(spring-webmvc) `@Controller`: Marks a class as a MVC controller.

>(spring-webmvc) `@RestController`: Marks a class like a REST controller, combining @Controller and @ResponseBody to REST, where all methods return data (e.g., JSON) directly, without render views.

>(spring-webmvc) `@RequestMapping(value)`: Maps URLs for controller methods.

>(spring-webmvc) `@GetMapping`: Maps HTTP GET requests for a specific method.

>(spring-webmvc) `@PostMapping`: Maps HTTP POST requests for a specific method.

>(spring-webmvc) `@PutMapping`: Maps HTTP PUT requests for a specific method.

>(spring-webmvc) `@PatchMapping`: Maps HTTP PATCH requests for a specific method.

>(spring-webmvc) `@DeleteMapping`: Maps HTTP DELETE requests for a specific method.

>(spring-webmvc) `@PathVariable`: Extracts values ​​of path variables in the URL.

>(spring-webmvc) `@RequestParam`: Extracts parameters from query string (e.g., ?Name = John).

>(spring-webmvc) `@RequestBody`: Converts the body of the request (e.g., JSON) into a java object.

(spring-webmvc) `@RequestHeader`: Extracts HTTP headers.

(spring-webmvc) `@ModelAttribute`: Binds data to an object or model.

>(spring-webmvc) `@ResponseStatus`: Defines the HTTP status code.

(jackson-databind) `@JsonProperty`: Defines the property name in JSON.

(jackson-databind) `@JsonIgnore`: Ignores a property in serialization.

(jackson-databind) `@JsonInclude`: Controls the inclusion of properties (e.g., ignore nulls).