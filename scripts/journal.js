/* let journalEntries = [
   {
   date: "7/1/19",
   concepts: "Downloads and Intros",
   entry: "Downloaded programs to our computers. Orientation presentation.",
   mood: "Happy"
 }, 
 {
   date: "7/15/19",
   concepts: "none",  
   entry: "Missed school because of migraine.",
   mood: "Stressed"
 },
 {
   date: "7/16/19",
   concepts: "none",
   entry: "Missed school because of migraine.",
   mood: "Stressed"
 },
 {
   date: "7/17/19",
   concepts: "Javascript Functions, Objects, DOM Manipulation",
   entry: "Started working on exercises on objects and functions from Chapter 6. Started on Chapter 7 \"Building DOM Components\" and started work on exercises in that chapter.",
   mood: "Ok"
 },
 {
   date: "7/18/19",
   concepts: "Buidling DOM Components in Javascript",
   entry: "Completed lightning exercise on factory functions. Updated student components exercise so that generic element generator function works with for-of loop.  Learned about DOM fragments. Started learning about APIs and json.",
   mood: "Confused"
 },
 {
   date: "7/19/19",
   concepts: "Intro to APIs and Fetch",
   entry: "Went over how to manipulate APIs using Postman.", 
   mood: "Confused"
 },
 {
  date: "7/22/19",
  concepts: "APIs and Fetch, Mini Group Project",
  entry: "Did mini group project on fetching data from an open source API. Used data to create html pages of blog posts, photos, and todo list.",
  mood: "Fine"
 }

]*/
 

const entryLogContainer = document.querySelector(".entryLog")

fetch("http://localhost:3000/journalEntries")
  .then(entries => entries.json())
  .then(parsedEntries => {
    const makeJournalEntryComponent = (journalEntry) => {
     
      return `
        <section class="eachEntry">
          <header class="entryHeader">
            <h1 class="date">Date: ${journalEntry.date}</h1>
            <h2 class="concepts">${journalEntry.concepts}</h2>
          </header>
          <div class="entryAndMood">
            <p class="entry">${journalEntry.entry}</p>
            <div class="mood">Mood: ${journalEntry.mood}</div>
          </div>
        </section>
      `
    }
    parsedEntries.forEach(entry => {
      const newEntryString = makeJournalEntryComponent(entry)
      entryLogContainer.innerHTML += newEntryString
    });
  })
