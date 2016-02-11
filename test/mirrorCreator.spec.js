import { expect }    from 'chai';
import mirrorCreator from '../src/mirrorCreator';

describe('mirrorCreator', () => {

  it('should throw on non-array input', () => {
    expect(() => mirrorCreator('OOPS')).to.throw(Error);
  });


  it('should return an object with values equal to its key names', () => {
    const input  = [ 'ONE', 'TWO', 'THREE' ];
    const output = mirrorCreator(input);

    expect(output.ONE).to.equal('ONE');
    expect(output.TWO).to.equal('TWO');
    expect(output.THREE).to.equal('THREE');
  });


  it('should return an object with values equal to its prefixed key names', () => {
    const input  = [ 'ONE', 'TWO', 'THREE' ];
    const output = mirrorCreator(input, { prefix: 'PREFIX/' });

    expect(output.ONE).to.equal('PREFIX/ONE');
    expect(output.TWO).to.equal('PREFIX/TWO');
    expect(output.THREE).to.equal('PREFIX/THREE');
  });

});
