# JSON-UI Validator

Currently acts as JSON validator for now. Official release will be soon...

## Plans

- Invalid JSON ✅
- Element uses properties but has no element type.
- Element uses an invalid element type.
- Element references an invalid element (if namespace is not implied).
- Element uses a invalid property.
- Element uses a valid property but invalid type.
- Controls array has empty objects.
- (WARN) - Array of controls have the same element name.
- A child of a parent control references the same parent resulting a loop.
- Property value references a variable that doesn't exist unless implied they are defined globally.
- Ignored property references the same variable as where the ignored property is used.

## Contributing

1. Fork the repository.
2. Have decent amount of knowledge about JavaScript.