function Hexagon({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex items-center justify-center w-24 h-28 bg-gradient-to-br from-indigo-500 to-purple-600 hex-shape hover:scale-110 transition-transform duration-300 z-10 hover:z-20 shadow-lg">
            {children}
        </div>
    )
}

function HoneycombGrid() {
    return (
        // 垂直堆叠，负间距
        <div className="flex flex-col -space-y-7 items-center p-10">
            {/* Row 1 */}
            <div className="flex gap-2">
                <Hexagon>1</Hexagon>
                <Hexagon>2</Hexagon>
            </div>

            {/* Row 2 - 即使数量一样，我们也可以通过 translate 实现交错 */}
            {/* 这种方式适合你想保持每行数量一致的场景 */}
            <div className="flex gap-2 translate-x-12">
                {' '}
                {/* 向右偏移宽度的一半(w-24的一半是12) + 间隙微调 */}
                <Hexagon>3</Hexagon>
                <Hexagon>4</Hexagon>
            </div>

            {/* Row 3 */}
            <div className="flex gap-2">
                <Hexagon>5</Hexagon>
                <Hexagon>6</Hexagon>
            </div>
        </div>
    )
}

export { HoneycombGrid }
