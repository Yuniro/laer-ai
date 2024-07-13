from . import schemas


def compute_cost_estimate(settings: schemas.ReviewSettings):
    if settings.number_of_documents > 5000000:
        settings.number_of_documents = 5000000

    total_cost = settings.number_of_documents * settings.cost_per_document

    min_docs = 500
    max_docs = 50000

    tar_number_of_docs = int(settings.number_of_documents*0.05)
    tar_number_of_docs = max(min_docs, tar_number_of_docs)
    tar_number_of_docs = min(max_docs, tar_number_of_docs)
    tar_cost = tar_number_of_docs * settings.cost_per_document

    competitor_number_of_docs = int(settings.number_of_documents*0.5)
    competitor_number_of_docs = max(min_docs, competitor_number_of_docs)
    competitor_cost = competitor_number_of_docs * settings.cost_per_document

    total_hours = tar_number_of_docs/(settings.docs_per_hour * settings.number_of_reviewers)
    total_days = int(total_hours/8)
    rest_hours = total_hours % 8
    if rest_hours > 0:
        total_days += 1

    return schemas.CostEstimation(manual_review_cost=total_cost,
                                  competitor_review_cost=competitor_cost,
                                  aida_cost=tar_cost,
                                  estimated_manual_cost_savings=max(0, total_cost-tar_cost),
                                  estimated_competitor_cost_savings=max(0, competitor_cost-tar_cost),
                                  estimated_review_days=total_days)
