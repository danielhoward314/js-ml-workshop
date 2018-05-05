
//Start off with what passes the first test.
class KNN {
	constructor (kSize) {
		this.kSize = kSize;
		this.points = [];
	}
	train (dataArr) {
		for (let i = 0; i < dataArr.length; i++){
			this.points.push(dataArr[i]);
		}
	}
	_distance = (vectOne, vectTwo) => {
		let firstCalc = 0;
		for (let i = 0; i < vectOne.length; i++){
			firstCalc += ((Math.pow(vectOne[i] - vectTwo[i], 2)))
		}
		return Math.sqrt(firstCalc);
	}
	_distances = (vector, arr) => {
		let output = [];
		arr.forEach((element) => {
			output.push([this._distance(vector, element[0]), element[1]]);
		});
	}
}



module.exports = KNN
