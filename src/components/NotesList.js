import Note from './Note';
import AddNote from './AddNote';
const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handlesetNotes,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					handlesetNotes={handlesetNotes}
					notes={notes}
					isStarted={note.isStarted}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}			
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;