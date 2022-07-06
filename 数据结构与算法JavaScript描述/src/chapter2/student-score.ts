class Score {
  public dataStore: number[] = [];

  public addScore(score: number) {
    if (typeof score === 'undefined') {
      throw new Error('Wrong score!')
    }
    this.dataStore.push(score);
  }

  public showAverage() {
    if (this.dataStore.length === 0) {
      return 0;
    }

    const total = this.dataStore.reduce((preValue: number, curValue: number) => {
      return preValue + curValue;
    })

    return total / this.dataStore.length;
  }
}

const studentScore = new Score();
studentScore.addScore(75);
studentScore.addScore(75);
studentScore.addScore(90);
console.log('平均分是', studentScore.showAverage());