export const processOptions = (options) => {
  const token = sessionStorage.getItem('authToken');
  if (!options) return {};
  let opts = { ...options };

  if (options.auth && token) {
    opts = {
      ...opts,
      headers: { ...opts.headers, Authorization: `${token}` },
    };
  }
  if (opts.method && opts.method.toUpperCase() !== 'GET') {
    opts = {
      ...opts,
      headers: {
        ...opts.headers,
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
  }
  if (opts.body) {
    opts = {
      ...opts,
      body: JSON.stringify(opts.body),
    };
  }
  opts = { ...opts, method: opts.method.toUpperCase() };
  delete opts.auth;
  return opts;
};

export const apiCall = async (url, options) => {
  try {
    const response = await fetch(url, processOptions(options));
    let error = undefined;
    const data = await response.json();

    if (response.status.toString().startsWith('5')) {
      console.log('SERVER ERROR', data.message);
      error = data.message;
    }
    if (response.status.toString() === '403') {
      console.log('FORBIDDEN', data.message);
      error = data.message;
    }
    if (response.status.toString() === '400') {
      console.log('BAD REQUEST', data.message);
      error = data.message;
    }
    if (response.status.toString() === '401') {
      console.log('UNAUTHORIZED', data.message);
      error = data.message;
    }
    if (response.status.toString() === '404') {
      console.log('NOT FOUND', data.message);
      error = data.message;
    }
    return { error, data };
  } catch (error) {
    return { error, data: undefined };
  }
};
