import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Flex from '../Flex'

// Get around some of the stupidity of this testing library
function renderFlex(props) {
  const { container } = render(Flex, props);
  return container.firstChild.firstChild;
}

describe('<Flex /> component', () => {

  test('returns an element with the "flex" class', () => {
    const container = renderFlex();
    expect(container).toHaveStyle('display: flex');
  });

  test('the default values work', () => {
    const container = renderFlex();
    expect(container).toHaveStyle('flex-direction: row');
    expect(container).toHaveStyle('align-items: center');
    expect(container).toHaveStyle('justify-content: center');
  });

  test('additional props are spread onto the element', () => {
    const container = renderFlex({ label: 'flexy-mcflexbox' });
    expect(container).toHaveAttribute('label', 'flexy-mcflexbox');
  });

  test('custom classNames will be applied to the element', () => {
    const container = renderFlex({ class: 'custom-class' });
    expect(container.classList.contains('custom-class')).toBe(true);
  });

  describe('direction prop', () => {
    // 'row' | 'column'
    test('row', () => {
      const container = renderFlex({ direction: 'column' });
      expect(container).toHaveStyle('flex-direction: column');
      expect(container).not.toHaveStyle('flex-direction: row'); // default
    });

    test('column', () => {
      const container = renderFlex({ direction: 'column' });
      expect(container).toHaveStyle('flex-direction: column');
      expect(container).not.toHaveStyle('flex-direction: row'); // default
    });

    test('bad value', () => {
      const container = renderFlex({ direction: 'oops' });
      expect(container).not.toHaveStyle('flex-direction: row'); // default
      expect(container).not.toHaveStyle('flex-direction: column');
    });
  });

  describe('align prop', () => {
    // 'start' | 'center' | 'end' | 'stretch'
    test('start', () => {
      const container = renderFlex({ align: 'start' });
      expect(container).toHaveStyle('align-items: flex-start');
      expect(container).not.toHaveStyle('align-items: center'); // default
    });

    test('center', () => {
      const container = renderFlex({ align: 'center' });
      expect(container).toHaveStyle('align-items: center');
    });

    test('end', () => {
      const container = renderFlex({ align: 'end' });
      expect(container).toHaveStyle('align-items: flex-end');
      expect(container).not.toHaveStyle('align-items: center'); // default
    });

    test('stretch', () => {
      const container = renderFlex({ align: 'stretch' });
      expect(container).toHaveStyle('align-items: stretch');
      expect(container).not.toHaveStyle('align-items: center'); // default
    });

    test('bad value', () => {
      const container = renderFlex({ align: 'oops' });
      expect(container).not.toHaveStyle('align-items: center'); // default
    });
  });

  describe('justify prop', () => {
    // 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'
    test('start', () => {
      const container = renderFlex({ justify: 'start' });
      expect(container).toHaveStyle('justify-content: flex-start');
      expect(container).not.toHaveStyle('justify-content: center'); // default
    });

    test('center', () => {
      const container = renderFlex({ justify: 'center' });
      expect(container).toHaveStyle('justify-content: center');
    });

    test('end', () => {
      const container = renderFlex({ justify: 'end' });
      expect(container).toHaveStyle('justify-content: flex-end');
      expect(container).not.toHaveStyle('justify-content: center'); // default
    });

    test('around', () => {
      const container = renderFlex({ justify: 'around' });
      expect(container).toHaveStyle('justify-content: space-around');
      expect(container).not.toHaveStyle('justify-content: center'); // default
    });

    test('between', () => {
      const container = renderFlex({ justify: 'between' });
      expect(container).toHaveStyle('justify-content: space-between');
      expect(container).not.toHaveStyle('justify-content: center'); // default
    });

    test('evenly', () => {
      const container = renderFlex({ justify: 'evenly' });
      expect(container).toHaveStyle('justify-content: space-evenly');
      expect(container).not.toHaveStyle('justify-content: center'); // default
    });

    test('bad value', () => {
      const container = renderFlex({ justify: 'oops' });
      expect(container).not.toHaveStyle('justify-content: center'); // default
    });
  });

  describe('reverse prop', () => {
    test('row-reverse', () => {
      const container = renderFlex({ direction: 'row', reverse: true });
      expect(container).toHaveStyle('flex-direction: row-reverse');
      expect(container).not.toHaveStyle('flex-direction: row'); // default/fallback
    });

    test('column-reverse', () => {
      const container = renderFlex({ direction: 'column', reverse: true });
      expect(container).toHaveStyle('flex-direction: column-reverse');
      expect(container).not.toHaveStyle('flex-direction: column'); // default/fallback
    });
  });

  describe('gap prop', () => {
    test('has gap prop set to 1 rem', () => {
      const container = renderFlex({ gap: '1rem' });
      expect(container).toHaveStyle('gap: 1rem');
      expect(container).not.toHaveStyle('gap: 0rem');
    });

    test('bad value', () => {
      const container = renderFlex({ gap: 'oops' });
      expect(container).not.toHaveStyle('gap: 1rem');
      expect(container).not.toHaveStyle('gap: 0');
    });
  })

  describe('inline prop', () => {
    test('has inline prop set to true', () => {
      const container = renderFlex({ inline: true });
      expect(container).toHaveStyle('display: inline-flex');
      expect(container).not.toHaveStyle('display: flex');
    });

    test('has inline prop set to false', () => {
      const container = renderFlex({ inline: false });
      expect(container).toHaveStyle('display: flex');
      expect(container).not.toHaveStyle('display: inline-flex');
    });

    test('does not has inline prop', () => {
      const container = renderFlex();
      expect(container).toHaveStyle('display: flex');
      expect(container).not.toHaveStyle('display: inline-flex');
    });

    test('bad value', () => {
      const container = renderFlex({ inline: 'oops' });
      expect(container).toHaveStyle('display: flex');
      expect(container).not.toHaveStyle('display: inline-flex');
    });
  })
});
