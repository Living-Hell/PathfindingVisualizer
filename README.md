# Path Finding Visualizer!!

This is an application which you can use to visualize shortest path algorithms in a graph. I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them in action. You can play around with this application by adding walls in the grid using your mouse and see how different pathfinding algorithms perform.

You can access the website at this link https://pathfinderr-visualiser.netlify.app/

### Screenshot

![Website Screenshot](https://github.com/Living-Hell/PathfindingVisualizer/blob/main/public\PathfindingVisualizerSS.png)

## Algorithms

**Dijkstra Algorithm**: This is the father of all the pathfinding algorithms. It was first published in 1959 and this single source shortest path algorithm works by the heuristic of shortest distance from the souce to the current node. The algorithm always guarantees to return the shortest path if it exists.

**Greedy Best First Search Algorithm**: It is an extremely fast algorithm which works on the heuristic of shortest distance from the current node to the destination node. The downside of this algorithm is that it does not always guarantee the shortest path.

**A \* Algorithm**: This is the best pathfinding algorithm. It's heuristic function works on the summation of shortest distance from source to current node and from the current node to the destination node. It works faster than dijkstra and always guarantees the shortest path if it exists.
