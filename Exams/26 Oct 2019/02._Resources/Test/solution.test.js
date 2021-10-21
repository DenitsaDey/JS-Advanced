let SkiResort = require('../solution');
let assert = require('chai').assert;


describe('Tests SkiResort functionality', function () {
    describe('constructor functionality', () => {
        it('should initiate class with one parameter resort name', () => {
            let newResort = new SkiResort('Chamonix');
            assert.equal(newResort.name, 'Chamonix');
            assert.equal(newResort.voters, 0);
            assert.equal(newResort.hotels.length, 0);
        });
    });

    describe('getter bestHotel', () => {
        it('should return correct message when no voters', () => {
            let newResort = new SkiResort('Kitzbuhel');
            assert.equal(newResort.bestHotel, 'No votes yet')
        });
        it('should return the hotel with highest points', () => {
            let res = new SkiResort("Some");
            res.build("Sun", 10);
            res.build('Avenue',5);
            res.book('Sun', 5);
            res.book('Avenue', 5);
            res.leave('Sun', 3, 2);
            res.leave('Avenue', 3, 3);
            res.book('Avenue', 3);
            res.leave('Avenue', 3, 0.5);
            
            assert.equal(res.bestHotel, 'Best hotel is Avenue with grade 10.5. Available beds: 3');
        });
    });

    describe('build function', () => {
        it('should throw error when empty string or less than 1 bed is provided', () => {
            let newResort = new SkiResort('Bansko');
            assert.throws(() => newResort.build('', 5), 'Invalid input');
            assert.throws(() => newResort.build('hotel', 0), 'Invalid input');
            assert.throws(() => newResort.build('', 0), 'Invalid input');
        });
        it('should retrun success message when name and number of beds are provided', () => {
            let newResort = new SkiResort('Bansko');
            assert.equal(newResort.build('hotel', 5), `Successfully built new hotel - hotel`);
        });
    });

    describe('book function', () => {
        it('should throw error when empty string or beds less than 1 is provided', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.throws(() => newResort.book('', 4), 'Invalid input');
            assert.throws(() => newResort.book('hotel', 0), 'Invalid input');
            assert.throws(() => newResort.book('', 0), 'Invalid input');
        });
        it('should throw error when hotel is not found', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.throws(() => newResort.book('bNb', 4), 'There is no such hotel');
        });
        it('should throw error when there is not enough available beds', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.throws(() => newResort.book('hotel', 6), 'There is no free space');
        });
        it('should return success message when hotel is booked', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.equal(newResort.book('hotel', 4), 'Successfully booked');
        });
        it('should decrease number of beds available when hotel is booked', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            newResort.book('hotel', 4)
            assert.equal(newResort.hotels.find(x => x.name === 'hotel').beds, 1);
        });
    });

    describe('leave function', () => {
        it('should throw error when empty string or beds less than 1 is provided', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.throws(() => newResort.leave('', 4, 1), 'Invalid input');
            assert.throws(() => newResort.leave('hotel', 0, 1), 'Invalid input');
            assert.throws(() => newResort.leave('', 0, 1), 'Invalid input');
        });
        it('should throw error when hotel is not found', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.throws(() => newResort.leave('bNb', 4, 1), 'There is no such hotel');
        });
        it('should return success message when hotel is left', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.equal(newResort.leave('hotel', 4, 1), `4 people left hotel hotel`);
        });
        it('should increase number of beds available when hotel is left', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            newResort.leave('hotel', 4, 1)
            assert.equal(newResort.hotels.find(x => x.name === 'hotel').beds, 9);
        });
        it('should increase hotel points by number of beds when hotel is left', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            newResort.leave('hotel', 4, 1)
            assert.equal(newResort.hotels.find(x => x.name === 'hotel').points, 4);
        });
        it('should number of voters by number of beds when hotel is left', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            newResort.leave('hotel', 4, 1)
            assert.equal(newResort.voters, 4);
        });
    });

    describe('averageGrade function', () => {
        it('should return correct message when no voters', () => {
            let newResort = new SkiResort('Bansko');
            newResort.build('hotel', 5);
            assert.equal(newResort.averageGrade(),'No votes yet');
        });
        it('should return correct average grade for the resort', ()=>{
            let res = new SkiResort("Some");
            res.build("Sun", 10);
            res.build('Avenue',5);
            res.book('Sun', 5);
            res.book('Avenue', 5);
            res.leave('Sun', 3, 2);
            res.leave('Avenue', 3, 3);
            res.book('Avenue', 3);
            res.leave('Avenue', 3, 0.5);
            assert.equal(res.averageGrade(), 'Average grade: 1.83')
        });
    });
});
