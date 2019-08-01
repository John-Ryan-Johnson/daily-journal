parsedEntries.forEach(entry => {
  const newEntryString = makeJournalEntryComponent(entry)
  entryLogContainer.innerHTML += newEntryString
});
