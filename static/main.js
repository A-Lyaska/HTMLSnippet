function find() {
    let value = snippet_id.value;
    let url = ''/snippets/' + String(value);
    view_snippet_form.action = url;
    view_snippet_form.submit();
}