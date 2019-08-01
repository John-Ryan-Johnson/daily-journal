const entryLogContainer = document.querySelector(".entryLog")
   const makeJournalEntryComponent = (journalEntry) => {
     console.log() 
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
