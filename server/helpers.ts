import slugify from "slugify";

// const strtotime = require('locutus/php/datetime/strtotime')
const excludeList = ["frontend", "Front end", "react", "nextjs", "Front-End"];

export function jobResolver(jobs: any) {
  const resolvedJob = jobs.map((job: any) => {
    const resolvedJob: any = {};
    resolvedJob.id = job.id;
    resolvedJob.title = job.title;
    resolvedJob.website = job.website;
    resolvedJob.description = job.description;
    resolvedJob.url = job.url;
    resolvedJob.company = job.company;
    resolvedJob.date = job.date;
    resolvedJob.slug = job.slug;
    resolvedJob.created_at = job.created_at;
    resolvedJob.location = job.location;
    resolvedJob.languages = job.languages;
    return resolvedJob;
  });
  return resolvedJob;
}

export function dbJobResolver(jobs: any) {
  return jobs.map((job: any) => {
    const resolvedJob: any = {};
    resolvedJob.benefits = [];
    resolvedJob.blast_to_newsletter = true;
    resolvedJob.description = "";
    resolvedJob.enable_qr_code = false;
    resolvedJob.highlight_post_yellow = false;
    resolvedJob.how_to_apply = "";
    resolvedJob.locations = job.locations;
    resolvedJob.primary_level = "";
    resolvedJob.primium_support = false;
    resolvedJob.send_to_directory = true;
    resolvedJob.show_color = false;
    resolvedJob.show_company_logo = true;
    resolvedJob.stick_for_1_month = false;
    resolvedJob.stick_for_1_week = false;
    resolvedJob.stick_for_24_hours = false;
    resolvedJob.total_amount = 0.0;
    resolvedJob.type = "";
    resolvedJob.apply_email = "";
    resolvedJob.apply_url = job.jobURL;
    resolvedJob.company_email = "";
    resolvedJob.company_logo = job.logo;
    resolvedJob.company_name = job.company;
    resolvedJob.company_twitter = "";
    resolvedJob.company_website = "";
    resolvedJob.invoice_address = "";
    resolvedJob.invoice_email = "";
    resolvedJob.invoice_notes = "";
    resolvedJob.keywords = job.tags;
    resolvedJob.max_salary = 0.0;
    resolvedJob.min_salary = 0.0;
    resolvedJob.pay_later_email = "";
    resolvedJob.position = job.title;
    resolvedJob.posted_at = null;

    resolvedJob.slug = `${slugify(job.title, {
      trim: true,
      lower: true,
      strict: true,
    })}-${generateString(6)}`;
    resolvedJob.isLive = true;
    resolvedJob.external = true;
    resolvedJob.sticky_expired_date = null;
    resolvedJob.total_views = 0;
    resolvedJob.total_click = 0;
    return resolvedJob;
  });
}

function generateString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function filterJobs(jobs: Array<any>) {
  return jobs.filter((job) => {
    if (job.position.toLowerCase().includes("back-end")) return job;
    else if (job.position.toLowerCase().includes("backend")) return job;
  });
}

export function sortDesc(arr: any) {
  return arr.sort((first: any, second: any) => {
    const dateA: any = new Date(first.date);
    const dateB: any = new Date(second.date);
    return dateB - dateA;
  });
}

export function sortAsc(arr: any) {
  return arr.sort((first: any, second: any) => {
    const dateA: any = new Date(first.date);
    const dateB: any = new Date(second.date);
    return dateA - dateB;
  });
}

export function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getRandomJob(jobs: Array<any>) {
  return jobs[Math.floor(Math.random() * jobs?.length)];
}

export function link(job: any, ref?: string, addRef: boolean = true) {
  if (addRef) {
    if (!job?.slug)
      return `/jobs/${job?.id}?id=${job?.id}&utm_source=${ref}&ref=${ref}`;
    return `/jobs/${job?.slug}?utm_source=${ref}&ref=${ref}`;
  } else {
    if (!job?.slug) return `/jobs/${job?.id}?id=${job?.id}`;
    return `/jobs/${job?.slug}`;
  }
}
