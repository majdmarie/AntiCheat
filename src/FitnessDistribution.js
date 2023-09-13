import React, { Component } from 'react';

const MATRIX_SIZE = 10;
const POPULATION_SIZE = 50;
const MUTATION_RATE = 0.1;
const MAX_GENERATIONS = 100;

class FitnessDistribution extends Component {
  constructor() {
    super();
    this.state = {
      matrix: [],
      population: [],
      generation: 0,
    };
  }

  initializePopulation = () => {
    const population = [];
    for (let i = 0; i < POPULATION_SIZE; i++) {
      const individual = {
        x: Math.floor(Math.random() * MATRIX_SIZE),
        y: Math.floor(Math.random() * MATRIX_SIZE),
        cheatingFactor: Math.random(), // Assign a random cheating factor
      };
      population.push(individual);
    }
    this.setState({ population });
  };

  calculateFitness = (individual) => {
    let fitness = 0;
    for (const other of this.state.population) {
      if (individual !== other) {
        const distance = Math.sqrt(
          (individual.x - other.x) ** 2 + (individual.y - other.y) ** 2
        );
        fitness += distance;
      }
    }
    return fitness;
  };

  selection = () => {
    const sortedPopulation = [...this.state.population].sort(
      (a, b) => this.calculateFitness(a) - this.calculateFitness(b)
    );
    const selected = sortedPopulation.slice(0, POPULATION_SIZE / 2);
    return selected;
  };

  generateNextGeneration = () => {
    const selected = this.selection();
    const newGeneration = [];

    while (newGeneration.length < POPULATION_SIZE) {
      const parent1 = selected[Math.floor(Math.random() * selected.length)];
      const parent2 = selected[Math.floor(Math.random() * selected.length)];
      const child = {
        x: Math.random() < 0.5 ? parent1.x : parent2.x,
        y: Math.random() < 0.5 ? parent1.y : parent2.y,
        cheatingFactor: Math.random() < MUTATION_RATE ? Math.random() : parent1.cheatingFactor,
      };
      newGeneration.push(child);
    }

    this.setState((prevState) => ({
      population: newGeneration,
      generation: prevState.generation + 1,
    }));
  };

  componentDidMount() {
    this.initializePopulation();
    this.interval = setInterval(() => {
      if (this.state.generation < MAX_GENERATIONS) {
        this.generateNextGeneration();
      } else {
        clearInterval(this.interval);
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Genetic Algorithm Cheating Factor Distribution</h1>
        <p>Generation: {this.state.generation}</p>
        <div>
          {}
          {Array.from({ length: MATRIX_SIZE }).map((_, row) => (
            <div key={row} className="row">
              {Array.from({ length: MATRIX_SIZE }).map((_, col) => {
                const individual = this.state.population.find(
                  (i) => i.x === col && i.y === row
                );
                return (
                  <div
                    key={col}
                    className="cell"
                    style={{
                      backgroundColor: individual
                        ? `rgba(0, 0, 255, ${individual.cheatingFactor})`
                        : 'transparent',
                    }}
                  >
                    {}
                    {individual ? individual.cheatingFactor.toFixed(2) : ''}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FitnessDistribution;
