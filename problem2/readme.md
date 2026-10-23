# Problem 2: Fancy Form

Single page: [index.html](index.html). It has no dependencies, so you can open it directly in a browser.

A sample "create your profile" form that uses every HTML input type, with English / Tiếng Việt switching, accessibility support, and clear errors that take you to the field.

## Inputs covered

text, email, tel (with +84 prefix), password (show/hide, strength meter, live rules), url, search + datalist, number (with − / + stepper), date, time, datetime-local, month, week, color (with preset swatches), range (with a text `aria-valuetext`), file (drag & drop, image preview), textarea (character counter), select, radio chips, segmented radio, star-rating radios, checkbox chips, switch (`role="switch"`), single consent checkbox, hidden.

## Validation and errors

- Fields validate when you leave them, then re-check live as you fix them.
- Submit shows an **error summary** at the top. Focus moves to it and screen readers announce it. Each entry is a link that scrolls to and focuses its field, and the field shakes briefly.
- Press **Alt + E** to go to the next field with an error.
- Inline messages tell you what to do ("Enter an email like name@example.com"), not just that the field is invalid.
- Some rules depend on other fields: the phone number becomes required when the contact method is Phone or SMS, and the confirm-password field must match the password.
- Other rules: you must be 13 or older; the call date must be a future weekday; the time must be 08:00–18:00; the photo must be PNG or JPG and at most 2 MB.

## Accessibility

- Every control has a real `<label>`, and groups use `<fieldset>` / `<legend>`.
- Hints and errors are linked through `aria-describedby`, and invalid fields get `aria-invalid`.
- There is a skip link, a visible focus ring, and touch targets of at least 44 px.
- Status changes (counter near its limit, stepper value, language switch) are read out through live regions.
- Required fields are marked with a symbol and text, so colour is never the only signal.
- Buttons for larger text and dark mode, plus support for `prefers-reduced-motion`.
- `lang` on `<html>` switches with the language, so screen readers use the right voice.

Language, theme and text size are remembered in `localStorage`. Nothing is sent anywhere: on success the page shows a summary of what was entered.
