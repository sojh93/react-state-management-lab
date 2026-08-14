interface TodoSummaryProps {
    totalCount: number;
    activeCount: number;
    completedCount: number;
}

function TodoSummary({
    totalCount,
    activeCount,
    completedCount,
}: TodoSummaryProps) {
    return (
        <div className="todo-summary">
            <span>전체 {totalCount}</span>
            <span>미완료 {activeCount}</span>
            <span>완료 {completedCount}</span>
        </div>
    );
}

export default TodoSummary;