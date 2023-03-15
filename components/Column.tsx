import { memo } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { ITask } from "./Interfaces";
import { IColumn } from "./Interfaces";

interface Props {
	column: IColumn;
	tasks: ITask[];
	index: number;
}
const Column = ({ column, tasks, index }: Props) => {
	return (

				<div

					className={`flex   m-2 border rounded h-fit
				`}
				>
					<div className="p-2 text-2xl">
						{column.title}
					</div>
					<Droppable droppableId={column.id} type="task">
						{(droppableProvided, droppableSnapshot) => (
							<div
								ref={droppableProvided.innerRef}
								{...droppableProvided.droppableProps}
								className={` p-2 ${
									droppableSnapshot.isDraggingOver ? "bg-orange-50" : "bg-white"
								}`}
							>
								<TaskList tasks={tasks} />

								{droppableProvided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			
	);
};
export default memo(Column);
