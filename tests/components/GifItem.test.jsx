import { render, screen } from '@testing-library/react';
import { Gifitem } from '../../src/components/Gifitem';

describe('Pruebas en <GifItem />', () => {
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<Gifitem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<Gifitem title={title} url={url} />);
    //screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe mostrar el título en el componente', () => {
    render(<Gifitem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
