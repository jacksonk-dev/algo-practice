let graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
[4, 0, 8, 0, 0, 0, 0, 11, 0],
[0, 8, 0, 7, 0, 4, 0, 0, 2],
[0, 0, 7, 0, 9, 14, 0, 0, 0],
[0, 0, 0, 9, 0, 10, 0, 0, 0],
[0, 0, 4, 14, 10, 0, 2, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 1, 6],
[8, 11, 0, 0, 0, 0, 1, 0, 7],
[0, 0, 2, 0, 0, 0, 6, 7, 0]]


const v = 9;

function djikStra(graph, source) {
  const shortestDistance = {};
  const visitedVertices = {};
  const shortestPath = {};
  for (let i = 0; i < v; i++) {
    shortestDistance[i] = Infinity;
  }

  shortestDistance[source] = 0;
  visitedVertices[source] = true;
  shortestPath[source] = `${source}`;

  let currentNode = source;
  while (currentNode !== null) {
    for (let i = 0; i < v; i++) {
      if (visitedVertices[i]) continue; //No need to update visitedVertices nodes
      if (graph[currentNode][i] === 0) continue; // Not connected to current node

      const distCurrentNodeToI = shortestDistance[currentNode] + graph[currentNode][i];

      if (distCurrentNodeToI < shortestDistance[i]) {
        shortestDistance[i] = distCurrentNodeToI;
        shortestPath[i] = shortestPath[currentNode] + i;
      }
    }

    currentNode = null;
    let minDistance = Infinity;
    Object.entries(shortestDistance).forEach(([node, dist]) => {
      if (dist < minDistance && !visitedVertices[node]) {
        minDistance = dist;
        currentNode = node;
      }
    })

    if (currentNode !== null) {
      visitedVertices[currentNode] = true;
    }
  }

  console.log(shortestDistance);
  console.log(shortestPath);
  return shortestDistance;
}

djikStra(graph, 0);
