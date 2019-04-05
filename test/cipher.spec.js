describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode (33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklm" para "abcdef" con un offset de 7', () => {
      assert.equal(window.cipher.encode (7, "abcdef"), "hijklm");
    });

    it('debería retornar "4567890123" para "1234567890" con un offset de 3', () => {
      assert.equal(window.cipher.encode (3, "1234567890"), "4567890123");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode (33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "lmnopqr" para "abcdefg" con un offset de 15', () => {
      assert.equal(window.cipher.decode (15, 'abcdefg'), 'lmnopqr');
    });

  });
});
